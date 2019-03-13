/* eslint-disable no-console, max-len, global-require, no-underscore-dangle, no-param-reassign, no-nested-ternary */
const _ = require('lodash') // eslint-disable-line import/no-extraneous-dependencies
const morgan = require('morgan')
const loggers = require('../utils/logger')

const logger = loggers.baseLogger
const { stream } = loggers.httpLogger
const { okLabel, infoLabel } = loggers.logStyles

morgan.token('id', req => req.id)

const headersSent = res => (typeof res.headersSent !== 'boolean' ? Boolean(res._header) : res.headersSent)

morgan.token('by', (req, colors = true) => {
  const serverLabel = colors ? okLabel(' SERVER ') : 'SERVER'
  const clientLabel = colors ? infoLabel(' CLIENT ') : 'CLIENT'
  try {
    if (req.headers && typeof req.headers['user-agent'] === 'string') {
      return req.headers['user-agent'].indexOf('axios') === 0 ? serverLabel : clientLabel
    }
  } catch (e) {
    logger.warn(e)
  }
  return infoLabel(' N/A ')
})

morgan.token('req-headers', (req, stringify = true) => {
  let filteredHeaders = {}
  try {
    const headers = { ...(req.headers || {}) } || { count: 0 }
    const excluded = [
      'accept',
      'content-type',
      'user-agent',
      'connection',
      'pragma',
      'referer',
      'accept-encoding',
      'accept-language',
      'upgrade-insecure-requests'
    ]

    if ('host' in headers && headers.host === 'localhost:4000') excluded.push('host')

    filteredHeaders = _.omit(headers, excluded)
    filteredHeaders = _.transform(
      filteredHeaders,
      (result, value, key) => {
        try {
          result[key] = _.truncate(value, { length: 200 })
        } catch (e) {
          result[key] = value
        }
      },
      {}
    )
  } catch (e) {
    filteredHeaders = req.headers
  }

  return stringify ? JSON.stringify(filteredHeaders) : filteredHeaders
})

morgan.token('cstatus', (req, res) => {
  const status = headersSent(res) ? res.statusCode : '-'

  // get status color
  const color = status >= 500
    ? 31 // red
    : status >= 400
      ? 33 // yellow
      : status >= 300
        ? 36 // cyan
        : status >= 200
          ? 32 // green
          : 0 // no color

  // Return colored status
  if (status === undefined) {
    return undefined
  }
  return `\u001B[${color}m${status}\u001B[0m`
})

logger.debug('Listening HTTP events with \'morgan\'')

let printFormat = (tokens, req, res) => [
  `${tokens.by(req)} [${tokens.date(req, res, 'web')}] `,

  `${tokens.method(req, res)} `,
  `${tokens.cstatus(req, res)} `,
  `${tokens.url(req, res)}\n`,

  `headers = ${tokens['req-headers'](req)} \n`,
  '* Response Time ',
  tokens['response-time'](req, res, 1),
  'ms'
].join('')

if (process.env.NODE_ENV === 'production') {
  printFormat = (tokens, req, res) => [
    `${tokens.by(req)} [${tokens.date(req, res, 'web')}] `,

    `${tokens.status(req, res)} `,
    `"${tokens.method(req, res)} `,
    `${tokens.url(req, res)}" `,

    tokens['response-time'](req, res, 1),
    'ms',

    ` ${tokens['req-headers'](req)}`
  ].join('')
}

const format = (tokens, req, res) => JSON.stringify({
  print: printFormat(tokens, req, res),
  by: tokens.by(req, false),
  date: tokens.date(req, res, 'web'),
  method: tokens.method(req, res),
  status: tokens.status(req, res),
  url: tokens.url(req, res),
  headers: tokens['req-headers'](req, false),
  cookies: req.cookies || {},
  responsetime: tokens['response-time'](req, res, 1)
})

module.exports = morgan(format, {
  skip(req) {
    try {
      return typeof req.url === 'string' && (req.url.indexOf('/_next') === 0 || req.url.indexOf('/static') === 0)
    } catch (e) {
      return false
    }
  },
  stream
})
