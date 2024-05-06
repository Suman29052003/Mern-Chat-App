const asyncHandler = require('express-async-handler');
const User = require('../models/user.model');
const generateToken = require('../config/generateToken')

const registerUser = asyncHandler(async(req,res)=>{
    //get data from the req.body
    const {name,email,password,confirmPassword,pic} = req.body;

    if(!name||!email||!password||!confirmPassword){
        res.status(400)
        throw new Error("Please provide all fields");
    }

    const userExists = await User.findOne({email});

    if(userExists){
        res.status(400);
        throw new Error ("User already exists")
    }

    const user = await User.create({
        name,
        email,
        password,
        confirmPassword,
        pic
    })

    if(user){
        res.status(201);
        res.json({
            success:true,
            _id:user._id,
            name:user.name,
            email:user.email,
            // token:generateToken(user._id)
        })
    }
    else{
        res.status(400);
        throw new Error ("Failed to create a user")
    }
})

module.exports = registerUser;