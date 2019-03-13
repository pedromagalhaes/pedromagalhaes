const winston = require('winston')
const _ = require('lodash')
const kleur = require('kleur')
kleur.enabled = require('color-support').level

const { productionFormat } = require('./winston-formats')
const ConsoleWithDebugModule = require('./winston-debug-transport')

let baseLogger = null
const isDebug = !!process.env.x_app_debug

// ! - Base System Logger // DEPRECATED: Use "module.exports.log" export
winston.loggers.add('base', {
  level: isDebug ? 'debug' : 'info',
  exitOnError: true,
  transports: [new ConsoleWithDebugModule({ ns: ':sys' })]
})

baseLogger = winston.loggers.get('base')

module.exports.baseLogger = baseLogger

// ! - HTTP Logger // Streams "morgan" module logs
const levelsByHttpCode = {
  500: 'error',
  400: 'warn',
  300: 'debug',
  200: 'info'
}

winston.loggers.add('http', {
  format: productionFormat,
  exitOnError: false,
  transports: [new ConsoleWithDebugModule({ ns: ':http' })]
})

const httpLogger = winston.loggers.get('http')

httpLogger.stream = {
  write(message) {
    try {
      const jsonMessage = JSON.parse(message)
      const metaData = _.omit(jsonMessage, ['print'])
      let { status } = metaData
      status = parseInt(status, 10)

      let logLevel = 'info'

      if (status >= 500) logLevel = levelsByHttpCode['500']
      else if (status >= 400) logLevel = levelsByHttpCode['400']
      else if (status >= 300) logLevel = levelsByHttpCode['300']
      else if (status >= 200) logLevel = levelsByHttpCode['200']

      httpLogger.log(logLevel, jsonMessage.print, metaData)
    } catch (e) {
      httpLogger.info(message, { type: 'http' })
    }
  }
}

module.exports.httpLogger = httpLogger

// ! - Namespace tagged logger
winston.loggers.add('streamDebug', {
  level: isDebug ? 'debug' : 'info',
  exitOnError: false,
  transports: [new ConsoleWithDebugModule({ ns: ':debug' })]
})

const streamToDebugModule = winston.loggers.get('streamDebug')

const logWithNamespace = (ns = ':sys', log) => streamToDebugModule.log('info', log, { ns })
const extendNamespace = (ns = ':sys') => (nsOrLog) => {
  const isNs = nsOrLog.startsWith(':')
  return isNs ? log => logWithNamespace(`${ns}${nsOrLog}`, log) : logWithNamespace(ns, nsOrLog)
}

// ! - Predefined log styles
module.exports.logStyles = {
  errorLabel: log => kleur.white.bgRed(log),
  okLabel: log => kleur.black.bgGreen(log),
  infoLabel: log => kleur.white.bgBlue(log),
  errorText: log => kleur.red.bold(log),
  okText: log => kleur.green(log),
  infoText: log => kleur.blue.dim(log),
  dimText: log => kleur.dim(log)
}

// ! - Loggers
module.exports.log = {
  app: extendNamespace(':app'),
  http: extendNamespace(':http')
}

module.exports.default = ns => module.exports.log.app(ns)
