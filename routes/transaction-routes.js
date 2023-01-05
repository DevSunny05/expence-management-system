const express = require("express");
const { addTransaction, getAllTransaction,editTransaction,deleteTransaction } = require("../controllers/transaction-controller");


const router = express.Router();

// add transaction POST
router.post('/add-transaction',addTransaction);

// Edit tarnsaction
router.post('/edit-transaction',editTransaction);

// delete transaction
router.post('/delete-transaction',deleteTransaction);

// get trasaction GET
router.post('/get-transaction',getAllTransaction);

module.exports = router;
