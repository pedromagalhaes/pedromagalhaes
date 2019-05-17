require('dotenv').config()

const nodeoutlook = require('nodejs-nodemailer-outlook')
const express = require('express')
const expressGraphQL = require('express-graphql')
const mongoose = require('mongoose')
const session = require('express-session')
const passport = require('passport')
const compression = require('compression')
const bodyParser = require('body-parser')
const MongoStore = require('connect-mongo')(session)
const next = require('next')
const models = require('./models') // eslint-disable-line no-unused-vars
const passportConfig = require('./services/auth') // eslint-disable-line no-unused-vars
const schema = require('./schema/schema')

const port = process.env.PORT || 4000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev, dir: './src/app' })

const handle = app.getRequestHandler()

// mongo connection
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:')) // eslint-disable-line no-console
db.once('open', () => {
  console.log('Connection successfully done to Mongo DB') // eslint-disable-line no-console
})

app.prepare()
  .then(() => {
    const server = express()

    server.use(compression())

    server.use(bodyParser.json())

    server.use(session({
      resave: true,
      saveUninitialized: true,
      secret: 'aaabbbccc',
      store: new MongoStore({
        url: process.env.MONGO_URL,
        autoReconnect: true
      })
    }))

    server.use(passport.initialize())

    server.use(passport.session())

    server.use('/graphql', expressGraphQL({
      schema,
      graphiql: true
    }))

    server.get(process.env.SMTP_URL, (req, res) => { // eslint-disable-line no-unused-vars
      nodeoutlook.sendEmail({
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
      console.log(`> Ready on http://localhost:${port}...`) // eslint-disable-line no-console
    })
  })
  .catch((err) => {
    console.error(err.stack) // eslint-disable-line no-console
    process.exit(1)
  })
