import express from "express"
const router=express.Router()
import { body } from "express-validator";


router.post("/register",[
    body("email").isEmail().withMessage("Invalid Email"),
    body("fullname.firstname").isLength({min:3}).withMessage("First name must be at least 3 character long"),
    body("password").isLength({min:6}).withMessage("Password must be at least 3 character long")


])




export default router;