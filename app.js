const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
require('dotenv/config')
const port = process.env.PORT

app.use(bodyParser.json())

// import routes
const userRoute = require('./routes/user')
const gearSetRoute = require('./routes/gearset')

app.use('/users', userRoute)
app.use('/gearsets', gearSetRoute)

//ROUTES
app.get('/', (req, res) => {
    res.send('We are on home!')
})

// connect to DB
mongoose.connect(process.env.DB_CONNECT, () => {
    console.log('Connected to DB!')
})

app.listen(port, () => {
    console.log("listening on port" + port)
})