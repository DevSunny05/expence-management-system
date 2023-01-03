const userModel=require("../models/user-model")

// login user
const loginController=async()=>{
    try {
        const {email,password}=req.body
        const user=await userModel.findOne({email,password});
        if(!user){
            return res.status(404).json({message:"user not found"})
        }

        res.status(200).json({
            success:true,
            user})
    } catch (error) {
        resizeBy.status(400).json({
            success:false,
            error
        })
    }
}

// register user
const registerController=async()=>{
    try {
        const newUser=new userModel(req.body);
        await newUser.save();
        res.status(201).json({
            success:true,
            newUser
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            error
        })
    }
}
module.exports={loginController,registerController}