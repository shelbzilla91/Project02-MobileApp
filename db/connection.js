const mongoose = require("mongoose")
require('dotenv').config();


mongoose.connect('mongodb://localhost/MobileApp').then(() => {
    console.log("MONGODB is now connected")
})

module.exports = mongoose;


// process.env.MONGODB_URI)