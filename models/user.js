const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const user = new Schema({
    username: String,
    firstName: String,
    lastName:String,
    password:String,

});

module.exports = mongoose.model("User", user)