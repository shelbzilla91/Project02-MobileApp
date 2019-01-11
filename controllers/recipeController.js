const Recipes = require("../models/Recipes")
const User = require("../models/User")


const recipeController = {
    index: (req, res) => {
        Recipes.find({}).populate('recipes').then((recipes) => {
            res.render("recipe/index", { recipes: recipes })

        })
    },
    new: (req, res) => {
        const userId = req.params.userId
        console.log(userId)
        res.render("recipe/newRecipeForm", { userId })
    },
    create: (req, res) => {
        const userId = req.params.userId
        // const newRecipe = req.body
        console.log(userId)
        User.findById(userId).then((user) => {
            Recipes.create({
                title: req.body.title,
                instructions: req.body.instructions,
                ingredients: [req.body.ingredients],
                allergy: req.body.allergy,
                genre: req.body.genre,
                description: req.body.description,
            }).then((newRecipe) => {
                user.recipes.push(newRecipe)
                return user.save()
            })


        }).then(() => {
            res.redirect(`/${userId}`)
        }).catch((error) => {
            console.log(`the error is ${error}`)
        })
    }
    // Recipes.create({
    //     title: req.body.title,
    //     instructions: req.body.instructions,
    //     ingredients: [req.body.ingredients],
    //     allergy: req.body.allergy,
    //     genre: req.body.genre,
    //     description: req.body.description,
    // })

}
module.exports = recipeController