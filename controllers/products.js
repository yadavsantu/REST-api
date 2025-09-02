const ProductModel=require("../models/product");



const getAllProducts=async(req,res)=>{
    const queryObject={};
    

    const {company, name, featured, sort}=req.query;
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
    let apiData=ProductModel.find(queryObject);
    
    if(sort){
        let sortFix=sort.replace(","," ");
        apiData=apiData.sort(sortFix);
    }

    console.log(queryObject);

    const myData=await apiData;
    res.status(200).json({
        myData
    });
}

const getAllProductsTesting=async(req,res)=>{
    const myData=await ProductModel.find(req.query).sort("price");
    console.log(
        req.query
    );
    res.status(200).json({
        myData
    });
}
module.exports={getAllProducts,getAllProductsTesting};  