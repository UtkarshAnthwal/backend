import express from 'express';
import product_routes from './Routes/product_route.js';
import connectDatabase from './Database/database_connect.js';
import cors from 'cors';

const app = express();

const PORT = process.env.PORT || 5000 ;

app.use(express.json());
app.use(cors());

//middleware or to set Router
app.use('/u_com', product_routes);

const start_server = async () =>{
    try{
        await connectDatabase()
        .then(()=>{
            app.listen(PORT,() => {
                console.log(`${PORT} Yes I am connected`);
            });
        })
    } catch(error) {
        console.log('Error', error);
    }
}

start_server();