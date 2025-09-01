const express=require('express');
const PORT=8080;
const app=express();

app.use(express.json());



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
    () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    }
)