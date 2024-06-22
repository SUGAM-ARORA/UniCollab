const express=require("express");
const {
    signup,
    loginuser,
    logoutuser
}=require("../controllers/authcontrollers.js");
const router=express.Router();
router.get("/signup",signup);
router.get("/login",loginuser);
router.get("/logout",logoutuser);
module.exports=router;