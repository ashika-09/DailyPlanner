const mongoose=require("mongoose");
require('dotenv').config();
const mongoURL = process.env.MONGO_URL;

const conn=async (req,res)=>{
 try{
    await mongoose.connect(mongoURL).then(()=>{
    console.log("mongodb connected");
  })
 }catch(error){
  res.staus(404).json({
    message:"db not connected"
  })
 }
};

conn();