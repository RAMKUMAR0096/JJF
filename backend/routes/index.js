const express=require('express');
const userController = require('../controller/user/userController');
const router=express.Router()




router.get("/",(req,res)=>res.json({ message: "Server is running", success: true, error: false }))
router.post("/user-detail",userController)



module.exports=router;