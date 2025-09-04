const express=require('express');
const router=express.Router();
const {userCreate, getAllUsers, updateUser, deletUser}=require('../controllers/userController');

router.route('/create').post(userCreate);
router.get("/getAllUsers",getAllUsers);
router.put('/update/:id',updateUser);
router.delete('/delete/:id', deletUser);
module.exports=router;