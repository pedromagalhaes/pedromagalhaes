
require('dotenv').config()
const express = require('express')
const next = require('next')
const mongoose = require('mongoose')
const compression = require('compression')
const bodyParser = require('body-parser')

const port = process.env.PORT || 4000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })

const handle = app.getRequestHandler()

// mongo connection
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:')) // eslint-disable-line no-console
db.once('open', () => {
  console.log('Connection successfully done to Mongo DB') // eslint-disable-line no-console
})

// mongo schema
const { Schema } = mongoose

// mongo queries
const MyModel = mongoose.model('posts', new Schema({ // eslint-disable-line no-unused-vars
  title:  String,
  description: String,
  by:   String,
  url: String,
  tags: String,
  likes: Boolean,
  comments: [{ user: String, message: String }],
  date: { type: Date, default: Date.now }
}))

app.prepare()
  .then(() => {
    const server = express()
    server.use(compression())
    server.use(bodyParser.json())

    server.get('/api/posts', (req, res) => {
      db.collection('posts').find().toArray((err, results) => {
        res.send(results)
      })
    })

    server.get('/api/about', (req, res) => {
      db.collection('about').find().toArray((err, results) => {
        res.send(results)
      })
    })

    server.get('/api/services', (req, res) => {
      db.collection('services').find().toArray((err, results) => {
        res.send(results)
      })
    })

    server.get('/api/works', (req, res) => {
      db.collection('works').find().toArray((err, results) => {
        res.send(results)
      })
    })

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
