//Creating API Routes for  Product DataBases
//P
import  exp from 'express'
import {productModel} from '../models/ProductModel.js'
 export const productApp=exp.Router();

 ///Define REST APIS
 //creating new product
 productApp.post("/products",async (req,res)=>{
    //get new product from the request;
    const newProduct=req.body;
    //create a new Product Document
    const newProductDocument=new productModel(newProduct);

    const result= await newProductDocument.save()
  console.log(result);
  res.status(201).json({message:"Product Created"});
 });

 //Read all Products
 productApp.get("/products",async(req,res)=>{
    let productList=await productModel.find();
    //sen response
    res.status(200).json({message:"Products",payload:productList})
 });

 //Read Product by ID
 productApp.get("/products/:id",async(req,res)=>{
        const productId=req.params.id;
        //find user by ID
        const productObj=await productModel.findOne({productId:productId});
        //if product Not Found
        if(!productObj)
            return res.status(404).json({message:"Product not found"})

        res.status(200).json({message:"Product",payload:productObj})
 })

 //To Update the Product by Product ID
 productApp.put("/products/:id",async (req,res)=>{
    const productId=req.params.id;
    const modifiedProduct=req.body;
    //find product by ID and Update
    const  updatedProduct=await productModel.findOneAndUpdate({productId:productId},
      {$set: {...modifiedProduct}},
      {new:true,runValidator:true},
    );
    console.log(updatedProduct);
    if(!updatedProduct)
      return res.status(400).json({message:"Product Not found"})
    //send res
    res.status(200).json({message:"Product Modified",payload:updatedProduct})
 })

 productApp.delete("/products/:id",async(req,res)=>{
    const productId=req.params.id;
    //find and delete by Product ID
    let deletedProduct=await productModel.findOneAndDelete(productId);
   // console.log(deletedProduct);
    if(!deletedProduct)
    {
        return res.status(404).json({message:"Product Not Found"})
    }
    res.status(200).json({message:"Product Removed",payload:deletedProduct});
 });


