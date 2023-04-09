const express = require('express')
const colors = require('colors')
require('dotenv').config()
const { createYoga } = require('graphql-yoga')
const schema = require('./schema/schema')
const connectDB = require('./config/db')

const port = process.env.PORT || 3000

const app = express()

connectDB()

const yoga = createYoga({
  schema,
  graphiql: process.env.NODE_ENV === 'development',
})

app.use('/graphql', yoga)

app.listen(port, console.log(`Server running on port ${port}`))
