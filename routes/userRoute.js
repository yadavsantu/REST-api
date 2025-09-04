const express=require('express');
const router=express.Router();
const {userCreate, getAllUsers}=require('../controllers/userController');

router.route('/create').post(userCreate);
router.get("/getAllUsers",getAllUsers);
module.exports=router;