//create min-exp app(seperate route)
 import exp from 'express';
 export const userApp=exp.Router();
let users=[];
//Create API(REST API-Representational state transfer)
   //Route to handle the GET req of Client 
     userApp.get('/users',(req,res)=>{
        res.json({message:"All Users",payload:users})
     });
    
     //  Create an API to handle  get By user id
     userApp.get('/users/:id',(req,res)=>{
        let idOfUrl=Number(req.params.id);
        //get the user
        let user=users.find(userObj=>userObj.id==idOfUrl)
        if(user==undefined)
            return res.json({message:"user not found"})
        res.json({ message:"User got",payload:user})
      })


    /* You can have only one get by parameter function
      //create an API to read by name
    app.get('/users/:name',(req,res)=>{
        let  nameOfUrl=req.params.name
        //get the user
        let user=users.find((userObj)=>userObj.name==nameOfUrl)
        console.log(user)
        if(user==undefined)
          return res.json({message:"User is not found"})
        res.json({message:"User found",payload:user})
    })*/


   //Route to handle thr POST req of Client
    userApp.post('/users',(req,res)=>{
        //Route to handle thr PUT req of Client
      //get user fron the client
      const newUser=req.body;
      //push into the user
      users.push(newUser);
      //send response
      res.json({message:"User Created"});
    });



    userApp.put('/users',(req,res)=>{
        //get  modified user from client
    let modifiedUser=req.body;
    //get index of existing user in users array
    let index=users.findIndex(userObj=> userObj.id==modifiedUser.id);
    // if user not found
    if(index==-1)
        return res.json({message:"User not found"});
    users.splice(index,1,modifiedUser);

    res.json({message:"updated"});

    });
    



   //Route to handle thr DELETE req of Client
    userApp.delete('/users/:id',(req,res)=>{
     // get id of url parameter 
     let idOfUrl=Number(req.params.id);
     //find index of User
     let index=users.findIndex(userObj=>userObj.id==idOfUrl) 
     if(index==-1)
        return res.json({message:"User Not Found"});
     
      users.splice(index,1,)
      res.json({message:"user deleted"})
    });
  
