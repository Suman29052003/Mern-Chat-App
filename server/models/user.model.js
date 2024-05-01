const mongoose = require('mongoose');

const User = mongoose.Schema({
    username:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String, required: true,unique:true},
    confirmPassword:{ type : String ,matches:"password" },   //validating the field against another field
    profilePic:{type:String,default:"https://i.pinimg.com/originals/09/21/fc/0921fc87aa989330b8d403014bf4f340.jpg"}
},
{timestamps:true})