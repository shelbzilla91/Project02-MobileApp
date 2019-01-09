const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const User = new Schema({
    username: String,
    firstName: String,
    lastName:String,
    password:String,

});

module.exports = mongoose.model("User", User)