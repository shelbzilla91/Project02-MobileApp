const user = require('../models/user')

user.deleteMany({})
    .then(() => {
        const newUser = user.create({
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