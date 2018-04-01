const express = require('express')

const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const twitter = require('./api/twitter')

const productRoutes = require('./api/routes/products')
const orderRoutes = require('./api/routes/orders')


mongoose.connect(`mongodb://pafgm:g6I74C3qlw!@pm-app-shard-00-00-yyxxt.mongodb.net:27017,pm-app-shard-00-01-yyxxt.mongodb.net:27017,pm-app-shard-00-02-yyxxt.mongodb.net:27017/test?ssl=true&replicaSet=PM-APP-shard-0&authSource=admin`)
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  )
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET')
    return res.status(200).json({})
  }
  next()
})

// Routes which should handle requests
app.get('/api/twitter', twitter)
app.use('/api/products', productRoutes)
app.use('/api/orders', orderRoutes)

app.use((req, res, next) => {
  const error = new Error('Not found')
  error.status = 404
  next(error)
})

app.use((error, req, res, next) => {
  res.status(error.status || 500)
  res.json({
    error: {
      message: error.message
    }
  })
})

module.exports = app
