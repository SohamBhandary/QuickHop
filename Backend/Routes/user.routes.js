import express from "express"
const router=express.Router()
import { body } from "express-validator";
import {registerUserController} from "../Controller/user.controller.js";
import {loginUserController} from "../Controller/user.controller.js"

router.post("/register",[
    body("email").isEmail().withMessage("Invalid Email"),
    body("fullname.firstname").isLength({min:3}).withMessage("First name must be at least 3 character long"),
    body("password").isLength({min:6}).withMessage("Password must be at least 3 character long")
  


],  registerUserController
     )
router.post("/login",[body("email").isEmail().withMessage("Invalid Email"),body("password").isLength({min:6}).withMessage("Password incorrect")],
loginUserController


)     




export default router;