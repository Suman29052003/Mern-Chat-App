const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt')

const User = mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true,
    },

    profilePic: {
        type: String,
        default: "https://i.pinimg.com/originals/09/21/fc/0921fc87aa989330b8d403014bf4f340.jpg"
    }
},
    {
        timestamps: {
            createdAt: 'created_at', // Rename createdAt to created_at
            updatedAt: 'updated_at', // Rename updatedAt to updated_at
            format: 'YYYY-MM-DD HH:mm:ss' // Format timestamps
        }
    })

User.methods.matchPassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password) 
}

const user = mongoose.model("User", User);

module.exports = user



