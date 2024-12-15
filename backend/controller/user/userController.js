const userModel = require("../../model/userModel")

 

 async function userController(req,res){
    try{
        const {name,email,contact,pincode,address,district,state}=req.body;
        if(!name){
            throw new Error("Please provide name")
        }

        if(!email){
           throw new Error("Please provide email")
        }
        if(!contact){
            throw new Error("Please provide contact")
        }
        if(!pincode){
            throw new Error("Please provide pincode")
        }
        if(!address){
            throw new Error("Please provide address")
        }
        if(!district){
            throw new Error("Please provide district")
        }
        if(!state){
            throw new Error("Please provide state")
        }

        const payload={
            ...req.body
        }

        const userData = new userModel(payload)
        const saveUser = await userData.save()

        res.status(201).json({
            data : saveUser,
            success : true,
            error : false,
            message : "WE WILL GET BACK TO YOU SHORTLY!"
        })

    }catch(err){
        res.json({
            message : err.message || err  ,
            error : true,
            success : false,
        })
    }
    
 }

 module.exports=userController