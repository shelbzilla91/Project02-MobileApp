const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const User = new Schema({
    username: String,
    firstName: String,
    lastName:String,
    password:String,
    email: String,
    img: String,
    recipes: [{ 
        type: Schema.Types.ObjectId,
        ref: "Recipes"
    } ],


});

module.exports = mongoose.model("User", User)