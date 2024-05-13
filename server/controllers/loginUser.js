const asyncHandler = require('express-async-handler')
const User = require('../models/user.model');
const generateToken = require("../config/generateToken")

const loginUser = asyncHandler(async(req,res) =>{
    const {email,password} = req.body;

    const user = await User.findOne({email});

    if(user && (await user.matchPassword(password))){
        res.status(201).json({
            success:true,
            _id: user._id,
            name: user.name,
            email: user.email,
            pic:user.pic,
            token : generateToken(user._id)
        })
    }
    else{
        throw new Error('Invalid Email or Password');
    }
});

module.exports = loginUser;