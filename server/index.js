
const express = require('express')
const next = require('next')

const port = process.env.PORT || 4000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
  .then(() => {
    const server = express()
    server.get('*', (req, res) => handle(req, res))
    server.listen(port, (err) => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${port}...`) // eslint-disable-line no-console
    })
  })