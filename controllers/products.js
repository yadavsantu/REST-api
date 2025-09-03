const ProductModel=require("../models/product");



const getAllProducts=async(req,res)=>{
    const queryObject={};
    

    const {company, name, featured, sort, select}=req.query;
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
        let sortFix=sort.split(",").join(" ");
        apiData=apiData.sort(sortFix);
    }
    if(select){
       let selectFix=select.split(",").join(" ");
        apiData=apiData.select(selectFix);
    }
    
    let page=Number(req.query.page) || 1;
    let limit=Number(req.query.limit) ||10;
    let skip =(page -1) *limit;



    console.log(queryObject);

    const Products=await apiData.skip(skip).limit(limit);
    res.status(200).json({
        Products, nbHits: Products.length
    });
}

const getAllProductsTesting=async(req,res)=>{
    const Products=await ProductModel.find(req.query).sort("price");
    console.log(
        req.query
    );
    res.status(200).json({
        Products
    });
}
module.exports={getAllProducts,getAllProductsTesting};  