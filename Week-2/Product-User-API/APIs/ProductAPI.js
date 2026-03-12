 //create min-exp app for product(seperate route)
 import exp from 'express';
 export const productApp=exp.Router();
 let products=[]
    //create API to handle get request
    productApp.get('/products',(req,res)=>{
        res.json({message:"Products",payload:products})
    })

    //create a API to handle get by Brand
    productApp.get('/products/:brand',(req,res)=>{
      //get the parameter in the url to get
      let brandOfUrl=req.params.brand
      //find the brand  is present or not in products
      let product=products.filter((productObj)=> productObj.brand==brandOfUrl)
      if(product==undefined)
        return res.json({message:"Brand not found"})
      res.json({message:"Brand found",payload:product})
    })


    //craete APIs with Product ({ProductID,name,brand,price})
    productApp.post('/products',(req,res)=>{
        //get the product from the user
        let userProduct=req.body;
        //push the userProduct to products
        products.push(userProduct);
        //send a response
        res.json({message:"product created"})
    })


    //API to update the Product
     productApp.put('/products',(req,res)=>{
        //get modified product
        let modifiedProd=req.body
        //find index of modified 
        let index=products.findIndex((product)=>product.pid==modifiedProd.pid);
          //if index not found 
          if(index==-1)
            return res.json({message:"Product not found"})
        //delete that particular product and add this modified product
        products.splice(index,1,modifiedProd);
        //send response that product updated
        res.json({message:"Product updated"})
     })



     //API to delete the product
     productApp.delete('/products/:id',(req,res)=>{
        //get the  url id of product
        let urlOfProduct=Number(req.params.id)
      
        //get the index of that id product  in the products
        let index=products.findIndex(prodObj=> prodObj.pid==urlOfProduct)
        console.log(index)
        if(index==-1)
          return res.json({message:"Product not found"})
         //delete the product
        products.splice(index,1);
        //send the response
        res.json({message:"Product Deleted"})  
     })