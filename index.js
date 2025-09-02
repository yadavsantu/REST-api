const express=require('express');
require('dotenv').config();
const PORT=process.env.PORT || 8081;
const app=express();
const connectDB=require("./db/connect");

app.use(express.json());

const productsRoutes=require('./routes/products');

//middlewares
app.use("/api/products",productsRoutes);

app.get('/',
    (req,res)=>{
        res.send("Hello this is my first api 🥰");

    }
);


app.get(
    '/tshirt',
    (req,res)=>{
        res.status(200).send({
            tshirt:'Blue T-shirt',
            size:'L'
        })
    }
);
app.post(
    '/tshirt/:id',
    (req,res)=>{
        const{id}=req.params;
        const{logo}=req.body;

        if(!logo){
            res.status(418).send({
                message:"We need a logo"
            });
            
        }
        res.status(200).send({
            tshirt:`T-shirt with ${id} and logo${logo}`
        });
    }

);


const start= async()=>{
    try{
        await connectDB(process.env.MONGODB_URI);
        console.log("Connected to database");
        app.listen(PORT,()=>{
            console.log(`Server is running on http://localhost:${PORT}/`);
        });
    }
    catch(error){
        console.log(error);
    }

}
start();
