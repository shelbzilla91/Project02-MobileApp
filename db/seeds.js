const User = require('../models/User')
const Comment = require('../models/Comments')
const Recipes = require('../models/Recipes')


const comments1 = new Comment({
    title: "A suggestion",
    created: 10/23/18,
    content: "I would suggest adding more garlic to your recipe, it doesn't seem that 2 cloves in enough",
    username: "shelbzilla91"

})
const recipe1 = new Recipes({
    title:"Vegan Spaghetti",
    created: 10/23/18,
    instructions:
    "Heat the olive oil in a frying pan. Add the onions, garlic, courgette, aubergine and peppers/ Cook for a few minutes on a high heat until lightly browned" +
    "Add the chopped tomatoes, water, vinegar and spaghetti" + "Bring to a boil then simmer for 10 minutes until the pasta is cooked and the sauce has thickened" +
    "Stir in the chopped basil and add salt and pepper, to taste. Add the nutritional yeast" + "Serve and enjoy"
    ,
    ingredients:,
    allergy:"tomatoes",
    genre:"Italian",
    username:[],
    description: "A yummy vegan option to Spaghetti"
    // array ref comments: = [comments1]
})
const user1 = new User({
    username: 'shelbzilla91',
    firstName: 'Shelby',
    lastName: 'Baker',
    password: 'elgato1010',
    email: 'shelbgatozillatron@gmail.com'
    // array ref comments: [recipe1]
})
User.deleteMany({}).then(()=> Comment.insertMany([comments1 ])).then(()=>Recipes.insertMany([recipe1])).then(()=> user1.save())
