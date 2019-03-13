/* eslint-disable global-require, no-param-reassign, no-console, unicorn/no-process-exit */
const cookieParser = require('cookie-parser')
require('dotenv-load')()
const express = require('express')
const nextjs = require('next')
const expressGraphQL = require('express-graphql')
const mongoose = require('mongoose')
const session = require('express-session')
const passport = require('passport')
const MongoStore = require('connect-mongo')(session)

const models = require('./models') // eslint-disable-line no-unused-vars
const passportConfig = require('./services/auth') // eslint-disable-line no-unused-vars
const schema = require('./schema/schema')
const printTaskBanner = require('./utils/print-task-banner')
const loggers = require('./utils/logger')

const env = process.env.environment
const port = parseInt(process.env.PORT, 10) || 4000
const dev = process.env.NODE_ENV === 'development'
const logger = loggers.baseLogger
const { logStyles, log } = loggers
const server = express()

const startNextAppServer = () => {
  const app = nextjs({ dev, dir: 'src/app' })
  app
    .prepare()
    .then(() => {
      server.use(cookieParser())
      require('./utils/express-config').init(server, app)

      const MONGO_URI = 'mongodb://pafgm:g6I74C3qlw@ds229790.mlab.com:29790/agroyo'
      mongoose.connect(MONGO_URI, { useNewUrlParser: true })
        .then(() => logger.info('Connected to MongoDB...'))
        .catch(err => console.error(err))

      server.use(session({
        resave: true,
        saveUninitialized: true,
        secret: 'aaabbbccc',
        store: new MongoStore({
          url: 'mongodb://stephen:password@ds053178.mlab.com:53178/auth',
          autoReconnect: true
        })
      }))

      server.use(passport.initialize())
      server.use(passport.session())

      server.use('/graphql', expressGraphQL({
        schema,
        graphiql: true
      }))

      // Start Express Server
      server.listen(port, (err) => {
        if (err) throw err
        const startupInfo = `${port} [${env}]`
        logger.info(`${logStyles.okText(' 💡 SERVER STARTED ')} Ready on port ${logStyles.okText(startupInfo)}`)
      })
    })
    .catch((err) => {
      logger.error(
        `${logStyles.errorLabel(' ‼️ STARTUP ERROR ')} ${logStyles.errorText('Unable to start the server')}`,
        err
      )
      console.error(err)
      if (err) throw err
    })
}

// ! - APP SERVER TASK EXECUTOR
;(async () => { // eslint-disable-line semi-style
  printTaskBanner('PEDRO MAGALHAES')
  log.app('📍 Booting the application...')
  log.http('✅ Running HTTP Next.js App Server...')
  startNextAppServer()
})()

process.on('exit', () => {
  log.app('🔔 Process "exit" signal received.')
})

process.on('SIGINT', () => {
  log.app('🔔 SIGINT signal received.')
  server
    && server.on('close', (err) => {
      log.app('💀 Express server terminated!')
      if (err) {
        console.error(err)
        // eslint-disable-next-line no-process-exit
        process.exit(0)
      }
    })
  log.app('💀 Application Terminated!')
  // eslint-disable-next-line no-process-exit
  process.exit(2)
})
