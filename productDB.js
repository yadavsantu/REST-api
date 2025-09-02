require('dotenv').config();
const connectDB=require('./db/connect');

const ProductModel=require('./models/product');

const ProductJSON=require("./products.json");


const start=async()=>{
    try{
        await connectDB(process.env.MONGODB_URI);
        await ProductModel.create(ProductJSON);
        console.log("Product data added successfully");

    }
    catch(error){
        console.log(error);

    }
}

start();