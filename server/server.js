const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors')
const authRoutes = require("./routes/authRoutes")
const connectToMongoDB = require('./database/dbConnection');
dotenv.config();
const corsOptions = {
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify the allowed HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Specify the allowed headers
    exposedHeaders: ['Content-Range', 'X-Content-Range'], // Specify the exposed headers
    credentials: true, // Allow sending cookies with cross-origin requests
    optionsSuccessStatus: 200,
  };

const app = express();
PORT = 3000;

app.use(express.json());

app.use(cors());

app.get('/',(req,res)=>{
    res.send("hello World")
})


app.use('/api/user', authRoutes)

connectToMongoDB()

app.listen(PORT, () => {
    try {
        console.log(`Server is running on ${PORT}`);
    } catch (err) {
        console.log(err);
    }
})