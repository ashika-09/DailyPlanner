const mongoose=require("mongoose");
require('dotenv').config();
const mongoURL = process.env.MONGODB_URL;

const conn=async (req,res)=>{
 try{
    await mongoose.connect(mongoURL).then(()=>{
    console.log("mongodb connected");
  })
 }catch(error){
  res.status(404).json({
    message:"db not connected"
  })
 }
};

conn();