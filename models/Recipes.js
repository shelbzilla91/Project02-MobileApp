const mongoose = require('../db/connection')
const recipeSchema = mongoose.Schema

const Recipes = new Schema({
    title: String,
    created: Date,
    instructions:String,
    ingredients:String,
    id:Number,
    allergy:String,
    genre:String,
    user: Number,
    discription: String
});

module.exports = mongoose.model("Recipes", Recipes)