const express=require('express');
const { loginController, registerController } = require('../controllers/user-controller');

const router=express.Router();

// routers
// post || login user
router.post("/login",loginController)

// post || register user
router.post("/register",registerController)

module.exports=router;