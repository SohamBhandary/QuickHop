import express, { urlencoded } from "express"
import dotenv from "dotenv"
import cors from "cors"
import connectTODb from "./DB/db.js";
import router from "./Routes/user.routes.js";
import cookieParser from "cookie-parser";
import { captainrouter } from "./Routes/captain.routes.js";

const port=process.env.PORT||3000
const app=express()
dotenv.config()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(cookieParser())
connectTODb()

app.get("/",(req,res)=>{
    res.send("ok")
})
app.use('/users',router)
app.use("/captain",captainrouter)

app.listen(port,()=>{console.log(`Sever is running at ${port}`);
})