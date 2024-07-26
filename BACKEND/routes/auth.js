const express=require("express");
const {
    signup,
    loginuser,
    logoutuser
}=require("../controllers/authcontrollers.js");
const router=express.Router();
router.post("/signup",signup);
router.post("/login",loginuser);
router.post("/logout",logoutuser);
module.exports=router;