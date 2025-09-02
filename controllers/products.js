const ProductModel=require("../models/product");



const getAllProducts=async(req,res)=>{
    const queryObject={};

    const {company, name, featured}=req.query;
    if(company){
        queryObject.company=company;
        // console.log(queryObject);
    }
    if(name){
        queryObject.name={ $regex:name, $options:"i" };

    }
    if(featured){
        queryObject.featured=featured;
    }

    console.log(queryObject);

    const myData=await ProductModel.find(queryObject);
    res.status(200).json({
        myData
    });
}

const getAllProductsTesting=async(req,res)=>{
    const myData=await ProductModel.find(req.query);
    console.log(
        req.query
    );
    res.status(200).json({
        myData
    });
}
module.exports={getAllProducts,getAllProductsTesting};  