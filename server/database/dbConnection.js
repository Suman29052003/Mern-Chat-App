const mongoose = require('mongoose');

async function connectToMongoDB(){
    try {
        var connect = await mongoose.connect(process.env.MONGOBURI);
        console.log(("Connected to MongoDB" + connect.connection.host));
    } catch (error) {
        console.log("error :",error)
    }
}

module.exports = connectToMongoDB;