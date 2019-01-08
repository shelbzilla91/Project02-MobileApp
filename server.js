
const express = require('express')
const app = express()
const methodOverride = require('method-override')

const routes = require('./routes/index')


//= =====================
// MIDDLEWARE
//= =====================
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(methodOverride('_method'))

app.set('view engine', 'hbs')

app.use(express.static(__dirname + '/public'))

// Logger provides extra information in our Node console about each request being made.


//= =====================
// Router
//= =====================
// Links the server to our Router File
app.use('/', routes)


//= =====================
// LISTENERS


app.listen(3000, () => console.log(` listening on port ${3000}!`))
//= =====================
// CONNECT MONGOOSE TO "donut_store"



