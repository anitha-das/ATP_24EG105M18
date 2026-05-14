//create http server
import exp from "express";
const app=exp();
import {userApp} from "./APIs/UserAPI.js"
import {productApp} from "./APIs/ProductAPI.js"
//user body parser middleware(in-built) to parse the JSON request,if not parsed then body is undefined
app.use(exp.json())


//Create custom middleware
function middleware1(req,res,next)
{
  
  //send response from middle ware
  //res.json({message:"This is middleware response"}) 

  //forward to next
  console.log("middleware 1 executed");
  next();
}
function middleware2(req,res,next)
{
  /*
  //send response from middle ware
  res.json({message:"This is middleware response"}) */

  //forward to next
  console.log("middleware 2 executed");
  next();
}
app.use(middleware1);
app.use(middleware2);
//Mounting all APIs to one place bu using that min express routers                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
//forward req to userAPI  if path starts with /user-api
app.use('/user-api',userApp);

//forward req to userAPI  if path starts with /product-api
app.use('/product-api',productApp);
//set a port number 
const port=3000;

//assign port number
app.listen(port,()=>console.log(`server listening port ${port}...`));

