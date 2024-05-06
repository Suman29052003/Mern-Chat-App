const express = require('express');
const dotenv = require('dotenv');
const authRoutes = require("./routes/authRoutes")
const connectToMongoDB = require('./database/dbConnection');
dotenv.config();

const app = express();

PORT = 6000 || process.env.PORT;

app.use(express.json());

app.get('/',(req,res)=>{
    res.send("Hello World!");
})

app.use('/api/user',authRoutes)

connectToMongoDB()

app.listen(PORT,()=>{
    try{
        console.log(`Server is running on ${PORT}`);
    }catch(err){
        console.log(err);
    }
})