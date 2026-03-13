
//CREATING API ROUTES FOR DATABASE
// //create min-express application
//Main app contains instance of http server
//We create mini express  app just to create api route but not instance of http server
import exp from 'express'
import {userModel} from '../models/UserModel.js'
import {hash,compare} from "bcryptjs"
import jwt from "jsonwebtoken"
import {verifyToken} from "../middlewares/verifyToken.js"
import {config} from "dotenv";
 config();//process.env.port,process.env.DB_URL
const {sign}=jwt
export const userApp=exp.Router()
//Define the USER REST APIs 

//user login
userApp.post("/auth",async(req,res)=>{
    //get user cred obj from client
    const {email,password}=req.body;
    //verify email
    let user=await userModel.findOne({email:email})
    //if emailnot existed
    if(!user)
        return res.status(404).json({message:"Invalid Email"});
    let result=await compare(password,user.password)
    //if password not matched
    if(!result)
        return res.status(400).json({message:"Invalid Password"});
    //if password are matched
    //create a token (jsonwebtoken)
    const signedToken=sign({email:user.email},process.env.SECRET_KEY,{expiresIn:"1d"})
    //store the token as http only cookie
    res.cookie("token",signedToken,{
        httpOnly:true,
        sameSite:"lax",
        secure:false
    })
    //send response
    res.status(200).json({message:"Login Success",payload:user})
}); 

//Create new User
userApp.post("/users",async(req,res)=>{
    //get new user obj from req
    const newUser=req.body;
    //hash the paswsowrd
    const hashedPassword=await hash(newUser.password,10)
    //replace the plain password with
    newUser.password=hashedPassword;
    //create new user dicument
    const newUserDocument=new userModel(newUser);
    //save
    const result=await newUserDocument.save();
    console.log("result:",result)
    //send res
    res.status(201).json({message:"User Created"})
});


//READ ALL USERS

userApp.get("/users",verifyToken,async(req,res)=>{
          //Read all users from the database
          let userList=await userModel.find()
          //send Response
          res.status(200).json({message:"Users",payload:userList});
});

//Read a User by Object ID
userApp.get("/user",verifyToken,async(req,res)=>{
    //Read user email from req
    const emailOfUser=req.user?.email;
    //console.log(emailOfUser)
    //find user by id
    const userObj= await userModel.findOne({email:emailOfUser}).populate("cart.product")
    //if user not found
    if(!userObj)
        return res.status(404).json({message:"User not found"});
    //send res
    res.status(200).json({message:"User",payload:userObj})
});

//Update a User by Object Id
userApp.put("/users/:id",verifyToken, async (req, res) => {
    //get modified  user from req
    const modifiedUser = req.body
    const uid = req.params.id
    //hash the paswsowrd
    const hashedPassword=await hash(modifiedUser.password,10)
    //replace the plain password with
    modifiedUser.password=hashedPassword;
    //find user by id & update
    const updatedUser = await userModel.findByIdAndUpdate(uid, { $set: { ...modifiedUser } }, { new: true,runValidators:true }) //new is used to return updated document
    //check if user not found
    if (!updatedUser) {
        return res.status(404).json({ message: "User not found" });
    }
    //send the res
    res.status(200).json({ message: "User modified", payload: updatedUser })
})
//Delete a user by id
userApp.delete("/users/:id",async(req,res)=>{
    const uid=req.params.id;
//find user id and delete
  const deletedUser=await userModel.findByIdAndDelete(uid);
    if(!deletedUser)
        return  res.status(404).json({message:"User Not Found"})
    //send res
    res.status(200).json({message:"User Deleted",payload:deletedUser})
});

//add product to cart
/*userApp.put("/cart/product-id/:pid",verifyToken, async(req,res)=>{
    //get product object id from url param
    let productId=req.params.pid
    //get current user details
    const emailOfUser=req.user?.email

    //add product to cart
    let result=await userModel.findOneAndUpdate({email:emailOfUser},{$push:{cart:{product:productId}}})
    //if user invalid
    if(!result){
        return res.status(404).json({message:"User not found"})
    }
    res.status(200).json({messgae:"Product added to cart"})
})
*/
//add product to the cart
userApp.put("/cart/product-id/:pid",verifyToken,async(req,res)=>{
//grt product id from yrl param
let productId=req.params.pid;
//get current USer Details
const emailOfUser=req.user?.email;
//add to product 
let result=await userModel.findOneAndUpdate({email:emailOfUser},{$push:{cart:{product:productId}}})
console.log(result);
//if user invalid
if(!result)
    return res.status(404).json({message:"User Not Found"});

res.status(200).json({message:"product added to cart"});
});




