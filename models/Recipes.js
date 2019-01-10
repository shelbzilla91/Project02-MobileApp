const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Recipes = new Schema({
    title: String,
    created: Date,
    instructions:String,
    ingredients:Array,
    id:Number,
    allergy:String,
    genre:String,
    description: String,
    comments: [{
        type: Schema.Types.ObjectId,
        ref: "Comment"
    }],
});

module.exports = mongoose.model("Recipes", Recipes)