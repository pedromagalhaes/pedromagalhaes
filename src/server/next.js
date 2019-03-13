(function nextJs(moduleExports) {
  const kl = require('kleur') // eslint-disable-line global-require
  const loggers = require('./utils/logger') // eslint-disable-line global-require
  const logger = loggers.baseLogger

  // Set up the proxy.
  moduleExports.init = (server, app) => { // eslint-disable-line no-param-reassign
    const handle = app.getRequestHandler()

    // Serve Static
    server.get(/^\/(_next|static)\/.+$/, (req, res) => handle(req, res))

    server.get('*', (req, res) => {
      logger.debug(`* Express Request: ${kl.blue.bold(req.url)}`)
      return handle(req, res)
    })
  }
}(module.exports))
