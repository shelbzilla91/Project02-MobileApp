const Users = require('../models/User')
const Comments = require('../models/Comments')
const Recipes = require('../models/Recipes')

const users = {
    username: 'shelbzilla91',
    firstName: 'Shelby',
    lastName: 'Baker',
    password: 'elgato1010',
    email: 'shelbgatozillatron@gmail.com',
    img: 'https://i.imgur.com/bwvnWLO.gif',
    recipes: []
}

const recipes = {
    title:"Vegan Spaghetti",
    created: 10/23/18,
    instructions:
    "Heat the olive oil in a frying pan. Add the onions, garlic, courgette, aubergine and peppers/ Cook for a few minutes on a high heat until lightly browned" +
    "Add the chopped tomatoes, water, vinegar and spaghetti" + "Bring to a boil then simmer for 10 minutes until the pasta is cooked and the sauce has thickened" +
    "Stir in the chopped basil and add salt and pepper, to taste. Add the nutritional yeast" + "Serve and enjoy"
    ,
    ingredients: ['tomatoes','pasta','basil','olive oil', 'garlic'],
    allergy:"tomatoes",
    genre:"Italian",
    username: "Shelby Baker",
    description: "A yummy vegan option to Spaghetti",
    comments: []   
}

const comments = {
    title: "A suggestion",
    created: 10/23/18,
    content: "I would suggest adding more garlic to your recipe, it doesn't seem that 2 cloves in enough",
    username: "shelbzilla91"
}

Users.deleteMany().then(() => {
    Recipes.deleteMany().then (() =>{
        Comments.deleteMany().then(() => {

            Comments.create(comments).then(createCommentDocument => {
            
                Recipes.create(recipes).then(createdRecipe =>{
                    createdRecipe.comments.push(createCommentDocument);

                    createdRecipe.save().then(savedRecipe => {

                        Users.create(users).then(createdUser =>{
                            createdUser.recipes.push(savedRecipe)

                            createdUser.save();
                
                        })
                    });
        
                })
            })
        })
    })
    console.log(users)
})
