const transactionModel = require("../models/transaction-model");
const moment = require("moment");

const getAllTransaction = async (req, res) => {
  try {
    const { frequency, selectedDate, type } = req.body;
    const transaction = await transactionModel.find({
      userid: req.body.userid,
      ...(frequency !== "custom"
        ? {
            date: {
              $gt: moment().subtract(Number(frequency), "d").toDate(),
            },
          }
        : {
            date: {
              $gte: selectedDate[0],
              $lte: selectedDate[1],
            },
          }),
      ...(type !== "all" && { type }),
    });
    res.status(200).json(transaction);
  } catch (error) {
    res.status(400).json(error);
  }
};

const addTransaction = async (req, res) => {
  try {
    const newTransaction = new transactionModel(req.body);
    await newTransaction.save();
    res.status(201).send("Transaction Created");
  } catch (error) {
    res.status(400).json(error);
  }
};

const editTransaction = async (req, res) => {
  try {
    await transactionModel.findOneAndUpdate(
      { _id: req.body.transactionId },
      req.body.payload
    );
    return res.status(200).send("Edit Successfully done")
  } catch (error) {
    return res.status(400).json(error);
  }
};

const deleteTransaction=async(req,res)=>{
    try {
        await transactionModel.findOneAndDelete({_id:req.body.transactionId})
        return res.status(200).send("Transaction Deleted")
    } catch (error) {
       return res.status(400).json(error)
    }
}

module.exports = { getAllTransaction, addTransaction, editTransaction,deleteTransaction };
