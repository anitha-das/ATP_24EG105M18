 import exp from "express"
 import {connect} from "mongoose" 
 import {userApp} from "./APIs/UserAPI.js"
 import {productApp} from "./APIs/ProductAPI.js";
 import cookieParser from "cookie-parser"
 import {config} from "dotenv";
 config();//process.env.port,process.env.DB_URL
 const app=exp();
 //middleware  to parse body
app.use(exp.json())
//add cookie parser tp middleware
app.use(cookieParser())
 //forward req to useApp if path starts with /user-api
 app.use("/user-api",userApp)
 //forward request to use App if path starts with  /product-api
 app.use("/product-api",productApp) ;
 const port=process.env.PORT ||4000;
 //connect DB Server
 async function connectDB()
 {
try{
    await connect(process.env.DB_URL);
    console.log("DB Connection success")
    //start the server
     app.listen(port,()=>console.log("server is listening to ",port));
}
catch(err)
{
    console.log("Errorin  DB Connecetion :",err);
}
 }
 connectDB();

 //Error Handling middleware contains 4 parameters- works only if error occured
 //Keep only at the end pof the server
 //Every error object contains name,message,callstack....
 app.use((err,req,res,next)=>{
  //console.log(err.name)
  if(err.name=="ValidationError")
    return res.status(400).json({message:"Error Occured",error:err.message})
  //Cast Error
  if(err.name=="CastError")
    return res.status(400).json({message:"Error Occured",error:err.message})
 
  res.status(500).json({message:"Error Occured",error:err.message})
});
