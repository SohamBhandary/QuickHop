import { userModel } from "../Model/user.model.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"


const authUser=async(req,res,next)=>{

    const token=req.cookies.token||req.headers.authorization.split(' ')[1];
    if(!token){
        return res.status(401).json({message:"Unauthorized"})
    }
    const isBlackListed=await userModel.findOne({token:token})
    if(isBlackListed){
        return res.status(401).json({message:"Unauthoried"})
    }
    try {
        const decoded=jwt.verify(token,process.env.JWT_SECRET)
        const user= await userModel.findById(decoded._id)
        req.user=user
      return  next()

        
    } catch (error) { return res.status(401).json({message:"Unauthorized"})
        
    }

}
export {authUser};

