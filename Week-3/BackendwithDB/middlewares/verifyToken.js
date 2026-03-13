import jwt from "jsonwebtoken"

const {verify} =jwt;

export function verifyToken(req,res,next){
    console.log(req.cookies.token);
    const token=req.cookies?.token;
    //if token fron unauthenticated user
    if(!token){
        return res.status(401).json({message:"please Login"})
    }
    try{
    //if token existed
     const decodedToken=verify(token,"abcdef");
     console.log(decodedToken);
     //attach decoded user to token
     req.user=decodedToken;
     next();
    }
    catch(err){
      res.status(401).json({message:"Session Expired, Please Relogin"});
    }
}