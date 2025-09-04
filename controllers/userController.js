const User=require('../models/userModel');

const userCreate=async(req,res)=>{
    try{
        const userData=new User(req.body);
        const{email}=userData;
        const userExist=await User.findOne({email});
        if(userExist){
            return res.status(400).json({message:"User already exists"});
        }
        const savedUser=await userData.save();
        res.status(201).json(savedUser);

    }catch(error){
        res.status(500).json("Error in creating user");
    }
}
const getAllUsers=async(req,res)=>{
    try{
        const users=await User.find();
        if(users.length===0){
            res.status(404).json({message:"No user found"});

        }
        res.status(200).json(users);

    }catch(error){
        res.status(500).json("Error in fetching users");
    }
}
module.exports={userCreate,getAllUsers};