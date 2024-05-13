const asyncHandler = require('express-async-handler');
const bcrypt = require('bcrypt')
const User = require('../models/user.model');
const generateToken = require('../config/generateToken')

const registerUser = asyncHandler(async(req,res)=>{
    //get data from the req.body
    const {name,email,password,pic} = req.body;

    // checking if all fields are filled
    if(!name|| !email|| !password){
        res.status(400)
        throw new Error("Please provide all fields");
    }

    // checking if user already exists via email
    const userExists = await User.findOne({email});

    // if user exists then throw error
    if(userExists){
        res.status(400);
        throw new Error ("User already exists")
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    
    const user = await User.create({
        name,
        email,
        password:hashedPassword,
        pic
    })

    if(user){
        res.status(201);
        res.json({
            success:true,
            _id:user._id,
            name:user.name,
            email:user.email,
            token:generateToken(user._id)
        })
    }
    else{
        res.status(400);
        throw new Error ("Failed to create a user")
    }
})

module.exports = registerUser;