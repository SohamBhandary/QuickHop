import express from "express"
const app=express()
import dotenv from "dotenv"
dotenv.config()
import cors from "cors"
app.use(cors)


const port=process.env.PORT||3000
import connectTODb from "./DB/db.js";
connectTODb()


app.use(cors())

app.get("/",(req,res)=>{
    res.send("ok")
})

app.listen(port,()=>{console.log(`Sever is running at ${port}`);
})