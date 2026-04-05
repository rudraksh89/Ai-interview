import jwt from "jsonwebtoken";

const isAuth = async (req,res,next)=>{
  try{
    const {token} = req.cookies;
  if(!token){
    return res.status(400).json({message:"User does not have a token"});
  }

  const validToken = jwt.verify(token,process.env.JWT_SECRET);
  if(!validToken){
    return res.status(400).json({message:"User does not have valid token"});
  }
  req.userId = validToken.userId;
  next();
  }catch(error){
    return res.status(500).json({message:`isAuth error ${error}`});
  }
}

export default isAuth;