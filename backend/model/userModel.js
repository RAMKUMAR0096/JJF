const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    contact:Number,
    address:String,
    pincode:String,
    district:String,
    state:String
},{
    timestamps:true
})

const userModel=mongoose.model("user",userSchema)

module.exports=userModel;                                                       