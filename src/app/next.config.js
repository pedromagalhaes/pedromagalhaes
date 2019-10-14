/* eslint-disable max-len, no-param-reassign, no-console, no-underscore-dangle, global-require */
const withPlugins = require('next-compose-plugins')
const withCSS = require('@zeit/next-css')
const withTM = require('next-transpile-modules')
const path = require('path')
const nanoid = require('nanoid')

const { environment = 'build' } = process.env
const runtimeId = nanoid()

const nextPlugins = []

nextPlugins.push(require('@zeit/next-source-maps'))

let analyzeTarget = ''
if (process.argv.indexOf('--bundle=server') !== -1) analyzeTarget = 'server'
else if (process.argv.indexOf('--bundle=client') !== -1) analyzeTarget = 'client'
else if (process.argv.indexOf('--bundle=both') !== -1) analyzeTarget = 'both'

if (environment === 'build') analyzeTarget = 'both'

nextPlugins.push([
  require('@zeit/next-bundle-analyzer'),
  {
    analyzeServer: analyzeTarget === 'server' || analyzeTarget === 'both',
    analyzeBrowser: analyzeTarget === 'client' || analyzeTarget === 'both',
    bundleAnalyzerConfig: {
      server: {
        analyzerMode: 'static',
        reportFilename: './analysis/server-bundle.html',
        openAnalyzer: false
      },
      browser: {
        analyzerMode: 'static',
        reportFilename: './analysis/client-bundle.html',
        openAnalyzer: false
      }
    }
  }
])

const nextConfig = {
  transpileModules: ['theme'],
  useFileSystemPublicRoutes: false,
  publicRuntimeConfig:
  environment !== 'build' ? { ...global.next_publicRuntimeConfig, runtimeId } : { runtimeId },
  webpack: (config, options) => {
    const { isServer } = options

    config.resolve.alias = {
      ...config.resolve.alias,
      '@icons': path.resolve(__dirname, './components/Icons'),
      '@services': path.resolve(__dirname, './services'),
      '@utils': path.resolve(__dirname, './utils'),
      '@context': path.resolve(__dirname, './context'),
      '@hoc': path.resolve(__dirname, './hoc'),
      '@components': path.resolve(__dirname, './components'),
      '@constants': path.resolve(__dirname, './constants'),
      '@reducers': path.resolve(__dirname, './reducers'),
      '@static': path.resolve(__dirname, './static'),
      '@mutations': path.resolve(__dirname, './mutations'),
      '@theme': path.resolve(__dirname, '../theme'),
      '@server': path.resolve(__dirname, '../server')
    }

    const staticPath = isServer ? '../static/' : 'static'

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
