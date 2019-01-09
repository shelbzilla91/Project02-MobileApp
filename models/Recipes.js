const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Recipes = new Schema({
    title: String,
    created: Date,
    instructions:String,
    ingredients:String,
    id:Number,
    allergy:String,
    genre:String,
    username: {
        type: Schema.Types.String,
        ref: "User"
    },
    description: String,
    comments: {
        type: Schema.Types.String,
        ref: "Comments"
    },
});

module.exports = mongoose.model("Recipes", Recipes)