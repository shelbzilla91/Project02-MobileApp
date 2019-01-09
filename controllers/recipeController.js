const User = require("../models/User")


const recipeController = {
    index: (req, res) => {
       Recipes.find({}).populate('recipes').then((recipes)=>{
            res.render("recipe/index", {recipes: recipes})

            // users is what you call in the handlebars ETC.
            
        } )

module.exports = recipeController