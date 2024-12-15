const express=require('express');
const app=express();
require('dotenv').config();
const mongoose=require('mongoose')
const cors=require('cors');
const router = require('./routes');
const connectDB=require("./config/db")


const PORT=process.env.PORT || 8000
app.use(cors());
app.use(express.json())



app.use("/api",router)

connectDB.then(
    app.listen(PORT,()=>{console.log(`server is running on ${PORT}`)})
)

