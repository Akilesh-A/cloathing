const express=require('express');
const app=express();
const dotenv=require('dotenv')
const path=require('path');
const connectDatabase=require('./config/connectDatabase');
const cors=require('cors')
dotenv.config({path:path.join(__dirname,'config','config.env')})

const products=require('./routes/product')
const orders=require('./routes/order');
const shops=require('./routes/shopRoutes');
const login=require('./routes/user');
const signin=require('./routes/signin')





connectDatabase();

app.use(cors());
app.use(express.json());


app.use('/api/v1/',products);
app.use('/api/v1/',orders);
app.use('/api/v1/',shops);
app.use('/api/v1/',login);
app.use('/api/v1/',signin);

app.listen(process.env.PORT,()=>{
    console.log(`server running in ${process.env.PORT} in ${process.env.NODE_ENV}`)
}) 