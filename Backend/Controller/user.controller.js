import { blackListTokenModel } from "../Model/blackListToken.model.js";
import { userModel } from "../Model/user.model.js";
import createUser from "../Services/user.service.js";
import { validationResult } from "express-validator";
import jwt from "jsonwebtoken"



const registerUserController=async(req,res,next)=>{
    const errors=validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() });


    }
    const {fullname,email,password}=req.body

    const hashedPassword= await userModel.hashPassword(password)

    const user=await createUser({firstname:fullname.firstname,lastname:fullname.lastname,email,password:hashedPassword})
    const token=user.generateAuthToken()
    res.status(200).json({token,user})


}
const loginUserController=async(req,res,next)=>{
     const errors=validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() });
    }
    const{email,password}=req.body
    const user=await userModel.findOne({email}).select("+password")
    if(!user){
        return res.status(401).json({mesaage:"Invalid email or password"})
    }
    const isMatch=await user.comparePassword(password);
    if(!isMatch){
        return res.status(401).json({mesaage:"Invalid email or password"})

    }
    const token=user.generateAuthToken();
    user.password=undefined
    res.status(200).json({token,user});
    
}
const getUserProfile=async(req,res,next)=>{
    res.status(200).json(req.user)


}
const logOutUser=async(req,res,next)=>{
    res.clearCookie('token')
    const token=req.cookies.token || req.headers.authorization


    await blackListTokenModel.create({token})
        res.status(200).json({message:"Logged Out"})
}

export { registerUserController, loginUserController,getUserProfile,logOutUser };

