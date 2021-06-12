const express = require('express')
const app = express()
const cors = require('cors')
const config = require('./utils/config')
const blogRouter = require('./controllers/blogs')

app.use(cors())
app.use(express.json())
app.use(express.static('build'))

app.use('/api/blogs', blogRouter)

module.exports = app