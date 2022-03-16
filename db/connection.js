require('dotenv').config();
const mongoose = require("mongoose")

mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log("MONGODB is now connected")
})

module.exports = mongoose;

'mongosh "mongodb+srv://cluster0.ccali.mongodb.net/myFirstDatabase" --apiVersion 1 --username Shelby_Baker'
// process.env.MONGODB_URI)