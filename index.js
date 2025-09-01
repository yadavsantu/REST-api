const express=require('express');
const PORT=8081;
const app=express();

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
app.listen(
    PORT,
    (err) => {
        if (err) {
            console.error('Error starting server:', err);
            process.exit(1); // Exit the process with failure
        }
        console.log(`Server is running on http://localhost:${PORT}/`);
    }
)