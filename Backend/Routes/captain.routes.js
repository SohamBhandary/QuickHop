import express from "express";
import { body } from "express-validator";
import { getCaptainProfile, loginCaptain, logOutCaptain, registerCaptain } from "../Controller/captain.controller.js";
import { authCaptian } from "../Middlewares/auth.middleware.js";

const captainrouter = express.Router();

captainrouter.post("/register", [
    body('email').isEmail().withMessage("Invalid email address"),
    body("fullname.firstname").isLength({ min: 3 }).withMessage("Firstname must be at least 3 characters long"),
    body("password").isLength({ min: 6 }).withMessage("Password must be at least 6 characters long"),
    body("vehicle.color").isLength({ min: 3 }).withMessage("Color must be at least 3 characters long"),
    body("vehicle.plate").isLength({ min: 3 }).withMessage("Plate must be at least 3 characters long"),
    body("vehicle.capacity").isInt({ min: 1 }).withMessage("Capacity must be at least 1"),
    body("vehicle.vehicleType").isIn(['car', 'motorcycle', 'auto']).withMessage("Invalid vehicle type")
], registerCaptain);
captainrouter.post("/login",[
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({min:6}).withMessage('password must be at least 6 charcaters')

],loginCaptain)
captainrouter.get("/profile",authCaptian,getCaptainProfile)
captainrouter.get("/logout",authCaptian,logOutCaptain)
export {  captainrouter};
