const express=require("express");
const app=express();
require("./connections/conn");
const auth=require("./routes/auth");
const list=require("./routes/list");
app.use(express.json());

app.put("/",(req,res)=>{
    res.send("hello");
})

app.use("/api/v1",auth);
app.use("/api/v1",list);

app.listen(1000,()=>{
    console.log("server is running");
});