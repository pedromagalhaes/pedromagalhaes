/* eslint-disable no-unused-vars, no-console, no-unused-vars */

require('dotenv').config()
const express = require('express')
const next = require('next')
const expressValidator = require('express-validator')
const cookieParser = require('cookie-parser')
const { parse } = require('url')
const cors = require('cors')
const bodyParser = require('body-parser')
const routes = require('./routes')

// env vars
const port = parseInt(process.env.PORT, 10) || 4000
const dev = process.env.NODE_ENV === 'development'

// next.js pages directory
const app = next({ dev, dir: 'src/app' })

// handle dynamic next.js routes requests
const handle = routes.getRequestHandler(app)

app
  .prepare()
  .then(() => {
    const server = express()
    server.use(expressValidator())
    server.use(cookieParser())
    server.use(cors())
    server.use(bodyParser.json())

    server.get('*', (req, res) => {
      const parsedUrl = parse(req.url, true)
      const { pathname, query } = parsedUrl
      handle(req, res, parsedUrl)
    })

    server.listen(port, (err) => {
      if (err) throw err
      console.log(`[HOST] ${process.env.HOST || 'http://localhost:4000/'}`)
    })
  })
  .catch((err) => {
    console.error(err.stack)
    process.exit(1)
  })
