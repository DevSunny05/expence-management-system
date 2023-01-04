const mongoose=require('mongoose')

const transactionSchema=new mongoose.Schema({
    userid:{
        type:String,
        required:true
    },
    amount:{
        type:Number,
        required:[true, 'amount is require']
    },
    type:{
        type:String,
        required:[true, 'type is require']
    },
    category:{
        type:String,
        required:[true,'category is require']
    },
    refrence:{
        type:String,
        
    },
    description:{
        type:String,
        required:[true,'description is required']
    },
    date:{
        type:String,
        required:[true, 'date is required']
    }
},
{timestamps:true})

const transactionModel=mongoose.model('transactions',transactionSchema);

module.exports=transactionModel;