/* eslint-disable max-len, no-param-reassign, no-console, no-underscore-dangle, global-require */
const withPlugins = require('next-compose-plugins')
const withCSS = require('@zeit/next-css')
const withTM = require('next-plugin-transpile-modules')
const path = require('path')
const nanoid = require('nanoid')

const { environment = 'build' } = process.env
const runtimeId = nanoid()

const nextPlugins = []
nextPlugins.push(require('@zeit/next-source-maps'))

const nextConfig = {
  transpileModules: ['theme'],
  publicRuntimeConfig:
  environment !== 'build'
    ? {
      ...global.next_publicRuntimeConfig,
      runtimeId
    }
    : {
      runtimeId
    },
  webpack: (config, options) => {
    const { isServer } = options

    config.resolve.alias = {
      ...config.resolve.alias,
      '/static': path.resolve(__dirname, 'static')
    }

    let staticPath = 'static'
    if (isServer) {
      staticPath = '../static/'
    }

    const urlLoader = {
      loader: 'url-loader',
      options: {
        limit: 100000, // in bytes
        publicPath: './',
        outputPath: staticPath,
        name: '[name]-[hash].[ext]'
      }
    }

    config.module.rules.push(
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        issuer: {
          test: /\.js?$/
        },
        use: [
          {
            loader: 'babel-loader',
            options: {
              babelrc: false,
              presets: ['@babel/preset-react', ['@babel/preset-env', { modules: 'auto' }]]
            }
          },
          {
            loader: '@svgr/webpack',
            options: {
              babel: false,
              prettier: false
            }
          }
        ]
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        issuer: {
          test: /\.(css)$/
        },
        loader: urlLoader
      },
    )

    config.module.rules.push(
      {
        test: /\.(jpg|jpeg|png|gif)$/,
        use: urlLoader
      },
      {
        test: /\.(woff|woff2?|[ot]tf|eot)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[hash].[ext]',
          publicPath: '../../static/fonts/',
          outputPath: `${staticPath}/fonts/`
        }
      },
    )

    return config
  }
}

module.exports = withPlugins(nextPlugins, withTM(withCSS(nextConfig)))
