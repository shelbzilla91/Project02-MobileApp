const user = require("../models/user")


const userController = {
    index: (req, res) => {
       user.find({}).then((returneduser)=>{
        // user.find({}).then( users =>{
        //     res.render("user/index", {users: users})
    res.send(returneduser)}
        )
        // } )
    },
    // new:(req, res) => {
    //     res.render("user/new")
    // },
    // create: (req,res) => {
    //     console.log(req.body)
    //     user.create({
    //         username: req.body.username,
    //         firstName: req.body.firstName,
    //         lastName:req.body.lastName

    //     }).then( newUser => {
    //         res.redirect('/')
    //     })
    // },
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
