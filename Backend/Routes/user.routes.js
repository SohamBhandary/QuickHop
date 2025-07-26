import express from "express"
const router=express.Router()
import { body } from "express-validator";
import {logOutUser, registerUserController} from "../Controller/user.controller.js";
import {loginUserController,getUserProfile} from "../Controller/user.controller.js"
import {authUser} from "../Middlewares/auth.middleware.js";

router.post("/register",[
    body("email").isEmail().withMessage("Invalid Email"),
    body("fullname.firstname").isLength({min:3}).withMessage("First name must be at least 3 character long"),
    body("password").isLength({min:6}).withMessage("Password must be at least 3 character long")
  


],  registerUserController
     )
router.post
("/login",[body("email").isEmail().withMessage("Invalid Email"),body("password").isLength({min:6}).withMessage("Password incorrect")],
loginUserController


)     

router.get("/profile",authUser,getUserProfile)
router.get("/logout",authUser,logOutUser)



export default router;