const mongoose=require("mongoose");
const conn=async (req,res)=>{
 try{
    await mongoose.connect("mongodb+srv://ashikaverma5736:Ashika123@cluster0.ulzovuy.mongodb.net/todo-mern").then(()=>{
    console.log("mongodb connected");
  })
 }catch(error){
  res.staus(404).json({
    message:"db not connected"
  })
 }
};

conn();