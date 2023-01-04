const express = require("express");
const { addTransaction, getAllTransaction } = require("../controllers/transaction-controller");


const router = express.Router();

// add transaction POST
router.post('/add-transaction',addTransaction);

// get trasaction GET
router.post('/get-transaction',getAllTransaction);

module.exports = router;
