const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,'name must be required']
    },
    email:{
        type:String,
        required:[true,'email must be required and unique'],
        unique:true
    },
    password:{
        type:String,
        required:[true,'password must be required']
    },
},
{timestamps:true}
)

const userModel=mongoose.model("users",userSchema);
module.exports=userModel;