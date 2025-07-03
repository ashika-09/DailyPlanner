const router=require("express").Router();
const User=require("../models/user");
const List=require("../models/list");
const list = require("../models/list");

router.post("/addTask",async (req,res)=>{
   try {
    const {title,body,id}=req.body;
    const existinguser=await User.findById(id);
    if (!existinguser) {
      return res.status(404).json({ message: "User not found" });
    }
   
      const list = new List({
      title,
      body,
      user: existinguser._id,
    });

    await list.save();

    existinguser.list.push(list._id);
    await existinguser.save();

    return res.status(200).json({ list });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something went wrong" });
  }
});


router.put("/updateTask/:id",async (req,res)=>{
   try {
    const { title, body } = req.body;

    const updatedList = await List.findByIdAndUpdate(
      req.params.id,
      { title, body },
      { new: true }
    );

    if (!updatedList) {
      return res.status(404).json({ message: "Task not found" });
    }

    return res.status(200).json({ message: "Updated", list: updatedList });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something went wrong" });
  }
});

router.delete("/deleteTask/:id",async (req,res)=>{
   try {
    const { id } = req.body; // user ID
    const taskId = req.params.id; // task ID

    const existinguser = await User.findByIdAndUpdate(
      id,
      { $pull: { list: taskId } }  // Remove task ID from user's list array
    );

    if (existinguser) {
      await list.findByIdAndDelete(taskId);
      res.status(200).json({ message: "Deleted" });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something went wrong" });
  }
});

router.get("/gettask/:id", async (req,res)=>{
    const list=await List.find({user:req.params.id}).sort({createdAt:-1});
    if(list.length!=0)res.status(200).json({list:list});
    else {
        res.status(200).json({message:"No Task found"})
    }
})


module.exports=router;