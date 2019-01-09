const User = require('../models/User')

User.deleteMany({})
    .then(() => {
        const newUser = User.create({
            username: 'shelbzilla91',
            firstName: 'Shelby',
            lastName:'Baker',
            password:'elgato1010',
        })
            .then((user) => {
                Promise.all([newUser]).then(() => {
                    user.save()
                    console.log('successfully seeded')
                })
            })
    })