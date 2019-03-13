/* eslint-disable global-require, no-param-reassign */
(async function expressInit(moduleExports) {
  const { NODE_ENV } = process.env
  const env = NODE_ENV
  const dev = env !== 'production'
  const httpLogger = require('./httpLogger')

  moduleExports.init = (server, app) => {
    if (!dev) {
      server.use(require('compression')())
    }
    server.use(httpLogger)
    server.use(require('universal-cookie-express')())
    server.use(require('cookie-parser')())
    require('../next').init(server, app)
  }
}(module.exports))
