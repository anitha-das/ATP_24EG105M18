//import Schema and Model from Mongoose
import {Schema,model} from 'mongoose';
//Schema  (productID,productName,price,brand)

//creating the schema
const productSchema= new Schema({
   productId:{
    type:Number,
    required:[true,"Id is required"]
   },
   productName:{
    type:String,
    required:[true,"ProductName Required"],
   },
   price:{
    type:Number,
    min:[10000,"Minimum price must be 10000"],
    max:[50000,"Maximum Price is 50000"],
    required:[true,"Price is required"]
   },
   brand:{
    type:String,
    required:[true,"Brand is Required"]
   }
},
{
    versionKey:false,
    timestamps:true,
})

//Generate product Model which takes two parameters one is product name and Schema of Product
export const productModel=model("product",productSchema);