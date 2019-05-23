/* eslint-disable no-unused-vars, no-console, no-unused-vars */

require('dotenv').config()

const nodemailer = require('nodejs-nodemailer-outlook')
const express = require('express')
const graphqlHTTP = require('express-graphql')
const mongoose = require('mongoose')
const session = require('express-session')
const passport = require('passport')
const MongoStore = require('connect-mongo')(session)
const next = require('next')
const expressValidator = require('express-validator')
const cookieParser = require('cookie-parser')

const models = require('./models')
const passportConfig = require('./services/auth')
const schema = require('./schema/schema')

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
    server.use('/graphql', graphqlHTTP(req => ({
      schema,
      context: {
        login: req.login.bind(req),
        user: req.user
      },
      graphiql: true
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
