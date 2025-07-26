import mongoose from "mongoose";

const blacklistToken=new mongoose.Schema({
    token:{
        type:String,
        required:true,
        unique:true
    },
    createdAt:{
        type:Date,
        default:Date.now,
        expires:86400
    }
})
export const blackListTokenModel=mongoose.model("blacklistTokenSchema",blacklistToken)