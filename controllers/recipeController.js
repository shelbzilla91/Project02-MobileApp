const Recipes = require("../models/Recipes")


const recipeController = {
    index: (req, res) => {
       Recipes.find({}).populate('recipes').then((recipes)=>{
            res.render("recipe/index", {recipes: recipes})
            
       })},
    new:(req, res) => {console.log("new",req.params)
        const userId = req.params.id
        res.render("recipe/newRecipeForm", {userId})
    },
    create: (req,res) => {
        console.log(req.body)
    User.find

        Recipes.create({
            title: req.body.title,
            instructions:req.body.instructions,
            ingredients:[req.body.ingredients],
            allergy:req.body.allergy,
            genre:req.body.allergy,
            description: req.body.description,
        }).then( newUser => {
            res.redirect('/' + req.params.userId)
        })
    }
    
    
}
module.exports = recipeController