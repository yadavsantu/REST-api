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

const updateUser=async(req,res)=>{
    try{
        const id=req.params.id;
        const userExist=await User.findOne({_id: id});

        if(!userExist){
            return res.status(404).json({message:"User not found"});
        }
        const updateUse= await User.findByIdAndUpdate(id, req.body,{new: true});
        res.status(201).json(updateUse);
        console.log(updateUse);

    }catch(error){
        res.status(500).json("Error in updating user");
    }
}
const deletUser= async ( req, res)=>{
    try{
        const id=req.params.id;

        const userExist=await User.findOne({_id: id})
        if(!userExist){
            return res.status(404).json({message:"User not found"});
        }
        await User.findByIdAndDelete(id);
        res.status(200).json({message:"User deleted successfully"});
        console.log("User deleted successfully");
    }catch(error){
        res.status(500).json("Error in deleting user");
    }
}
module.exports={userCreate,getAllUsers, updateUser, deletUser};