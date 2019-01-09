const User = require("../models/User")


const userController = {
    index: (req, res) => {
       User.find({}).then((users)=>{
            res.render("user/index", {users: users})

            // users is what you call in the handlebars ETC.
            
        } )
    },
    new:(req, res) => {
        res.render("user/new")
    },
    create: (req,res) => {
        console.log(req.body)
        User.create({
            username: req.body.username,
            firstName: req.body.firstName,
            lastName:req.body.lastName,
            password:req.body.password,
            email:req.body.email,
            img: req.body.img



        }).then( newUser => {
            res.redirect('/')
        })
    },
    // show: (req,res) => {
    //     const userId = req.params.id
    //     user.findById(userId).then((userLink) =>{
    //         console.log(userLink)
    //         res.render('user/show', {userLink})
    //     })
    // },
    // edit:(req,res) => {
    //     const userId = req.params.id
    //     res.render ('user/edit', {userId})
    // }
}
    
        
    

    

    module.exports = userController
