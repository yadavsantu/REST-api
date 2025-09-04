const express=require('express');
const router=express.Router();
const {userCreate, getAllUsers, updateUser}=require('../controllers/userController');

router.route('/create').post(userCreate);
router.get("/getAllUsers",getAllUsers);
router.put('/update/:id',updateUser);
module.exports=router;