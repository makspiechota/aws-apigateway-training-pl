const express = require('express')
const helloRoutes = require('./routes/helloRoutes')

const app = express()
app.use(express.json())
app.use('/', helloRoutes)

module.exports = app
