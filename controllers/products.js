const getAllProducts=async(req,res)=>{
    res.status(200).send({
        message:"All products"
    });
}
const getAllProductsTesting=async(req,res)=>{
    res.status(200).send({
        message:"Testing All products"
    });
}
module.exports={getAllProducts,getAllProductsTesting};  