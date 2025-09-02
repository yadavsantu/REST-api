const ProductModel=require("../models/product");



const getAllProducts=async(req,res)=>{
    const myData=await ProductModel.find({});
    res.status(200).json({
        myData
    });
}
const getAllProductsTesting=async(req,res)=>{
    const myData=await ProductModel.find({company:"Apple"});
    res.status(200).json({
        myData
    });
}
module.exports={getAllProducts,getAllProductsTesting};  