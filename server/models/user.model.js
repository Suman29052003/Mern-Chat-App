const mongoose = require('mongoose');

const User = mongoose.Schema({
    name:{type: String,required:true},
    email:{type: String,required:true,unique:true},
    password:{type: String, required: true,unique:true},
    confirmPassword:{ type : String ,matches:"password",required: true },   //validating the field against another field
    profilePic:{type:String,default:"https://i.pinimg.com/originals/09/21/fc/0921fc87aa989330b8d403014bf4f340.jpg"}
},
{timestamps:true})

const user = mongoose.model("User", User); 

module.exports = user