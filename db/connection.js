// require('dotenv').config();
const mongoose = require("mongoose")

mongoose.connect('mongodb://localhost/MobileApp').then(() => {
    console.log("MONGODB is now connected")
})

module.exports = mongoose;


// process.env.MONGODB_URI)