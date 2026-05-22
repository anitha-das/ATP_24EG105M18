//import Schema class from Mongoose Library
import { Schema,model,Types} from "mongoose";
//Create Cart Schema
const cartSchema=new Schema({
   product:{
      type:Types.ObjectId,
      ref:"product"//name of product model in the model method
    },
    count:{
        type:Number,
        default:1
    }
})
//Create User Schema(username,password,email,age) 
const userSchema = new Schema({
    //Structure of a user resource
    username: {
        type: String,
        required: [true, "Username is required"],
        minLength: [6, "Min length of username is 6 characters"],
        maxLength: [8, "Username length exceeds 8 characters"],
    },
    password: {
        type: String,
        required: [true, "Password required"],
    },
    email: {
        type: String,
        required: [true, "Email required"],
        //ITS JUST AN OPTION,NOT AN VALIDATOR
        unique:[true,"Email already Exists"],
    },
    age: {
        type: Number
    },
    cart:[cartSchema]
},{
    versionKey:false,
    timestamps:true
});

//Gnerate UserModel Note: model takes two parameters
//  one is the singular form of the user and converts to users and another is Schema created object
export const userModel=model("user",userSchema)