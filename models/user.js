const mongoose = require('../db/connection')
const userSchema = mongoose.Schema

const user = new Schema({
    username: String,
    firstName: String,
    lastName:String,
    password:String,
    id:Number,
    created:Date


});

module.exports = mongoose.model("User", user)