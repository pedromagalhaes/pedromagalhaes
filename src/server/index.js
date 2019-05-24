/* eslint-disable no-unused-vars, no-console, no-unused-vars */
require('dotenv').config()
// Fast, unopinionated, minimalist web framework for node
const express = require('express')
// Session middleware for Express
const session = require('express-session')
// An express.js middleware for validator
const expressValidator = require('express-validator')
// MongoDB session store for Connect and Express
const MongoStore = require('connect-mongo')(session)
// Schema-based solution to model your application data
// It includes built-in type casting, validation, query building, business logic hooks and more
const mongoose = require('mongoose')
// Create a GraphQL HTTP server with any HTTP web framework that supports connect styled middleware
const graphqlHTTP = require('express-graphql')
// Passport is Express-compatible authentication middleware for Node.js
// Authenticate requests, which it does through an extensible set of plugins known as strategies
const passport = require('passport')

const next = require('next')
const nodemailer = require('nodejs-nodemailer-outlook')
const cookieParser = require('cookie-parser')

const models = require('./models')
const MyGraphQLSchema = require('./schema')
const passportConfig = require('./passport/auth')

// env vars
const port = process.env.PORT || 4000
const dev = process.env.NODE_ENV !== 'production'
const mongoURL = dev ? process.env.MONGO_URL_DEV : process.env.MONGO_URL_PROD
const hostURL = dev ? process.env.HOST_DEV : process.env.HOST_PROD

// next.js pages directory
const app = next({ dev, dir: './src/app' })

// handle requests
const handle = app.getRequestHandler()

// mongo connection
mongoose.set('useCreateIndex', true)
mongoose.connect(mongoURL, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => {
  console.log('Connection successfully done to Mongo DB')
})

app
  .prepare()
  .then(() => {
    const server = express()
    server.use(expressValidator())
    server.use(cookieParser())

    // mongo db
    server.use(
      session({
        secret: 'kjaigalhdenmaaesross',
        key: 'token',
        resave: false,
        saveUninitialized: false,
        store: new MongoStore({
          url: mongoURL,
          autoReconnect: true
        })
      })
    )

    // passport
    server.use(passport.initialize())
    server.use(passport.session())

    // graphql
    server.use('/graphql', graphqlHTTP(async req => ({
      schema: MyGraphQLSchema,
      context: {
        login: req.login.bind(req),
        user: req.user
      },
      graphiql: true,
      pretty: true
    })))

    // email server
    server.get(process.env.SMTP_URL, (req, res) => {
      nodemailer.sendEmail({
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS
        },
        to: 'pedro.magalhaes@outlook.com',
        subject: 'Hey you, awesome!',
        html: '<b>This is bold text</b>',
        text: 'This is text version!',
        onError: e => console.log(e),
        onSuccess: i => console.log(i)
      })
    })

    server.post('/logout', (req, res) => {
      req.logout()
      req.session.destroy(() => res.redirect('/'))
    })

    /*
    server.get('/api/works', (req, res) => {
      db.collection('works').find().toArray((err, results) => {
        res.send(results)
      })
    })
    */

    server.get('*', (req, res) => handle(req, res))

    server.listen(port, (err) => {
      if (err) throw err
      console.log(`> GraphQL Server Listening on ${hostURL}...`)
    })
  })
  .catch((err) => {
    console.error(err.stack)
    process.exit(1)
  })
