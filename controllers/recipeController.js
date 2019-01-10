const Recipes = require("../models/Recipes")


const recipeController = {
    index: (req, res) => {
       Recipes.find({}).populate('recipes').then((recipes)=>{
            res.render("recipe/index", {recipes: recipes})


            
       })
    
    }
}
module.exports = recipeController