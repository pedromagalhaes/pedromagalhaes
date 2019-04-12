
const express = require('express')
const next = require('next')
const mongoose = require('mongoose')
const compression = require('compression')
const bodyParser = require('body-parser')

const port = process.env.PORT || 4000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })

const handle = app.getRequestHandler()

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true })
  .then(() => console.log('Database Connected!'))
  .catch(err => console.error(err))

app.prepare()
  .then(() => {
    const server = express()
    server.use(compression())
    server.use(bodyParser.json())
    server.get('*', (req, res) => handle(req, res))
    server.listen(port, (err) => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${port}...`) // eslint-disable-line no-console
    })
  })
  .catch((err) => {
    console.error(err.stack)
    process.exit(1)
  })
