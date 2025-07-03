const router=require("express").Router();
const User=require("../models/user");
const bcrypt=require("bcryptjs");

router.post("/register", async (req,res)=>{
    try {
        const {email,username,password}=req.body;
        const hashpassword=bcrypt.hashSync(password);
        const user=new User({email,username,password:hashpassword});
        await user.save().then(()=>res.status(200).json({message:"SignUp successful"}));
    } catch (error) {
        console.log(error);
         res.status(200).json({message:"User already exist"});
    }
});

//signin
router.post("/signin", async (req, res)=>{
    try {
        const user=await User.findOne({email: req.body.email });
        if(!user){
            res.status(200).json({message:"Please Sign up first"})
        }

        const ispasswordcorrect=bcrypt.compareSync(
            req.body.password,
            user.password
        );

        if(!ispasswordcorrect){
            res.status(200).json({message:"Incorrect Password"})
        }
       
        const { password,...others } = user._doc;
         res.status(200).json({ others });
    } catch (error) {
        console.log(error);
         res.status(200).json({message: "user already exist"});
    }
});

module.exports=router;