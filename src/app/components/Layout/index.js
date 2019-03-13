import PropTypes from 'prop-types'
import Router from 'next/router'
import NProgress from 'nprogress'
import { ThemeProvider } from 'styled-components'

import Header from '../Header'
import Footer from '../Footer'
import Head from './Head'

const { useEffect } = React

// Reference: https://medium.com/styled-components/getting-sassy-with-sass-styled-theme-9a375cfb78e8
// eslint-disable-next-line import/no-webpack-loader-syntax
const theme = require('sass-extract-loader?{"plugins": ["sass-extract-js"]}!../../../dmi-ui/stylesheets/variables.scss')

const Layout = ({ children }) => {
  const { pathname } = children.props
  const isSignInPage = pathname === '/' || pathname === '/signin'

  useEffect(() => {
    Router.events.on('routeChangeStart', () => NProgress.start())
    Router.events.on('routeChangeComplete', () => NProgress.done())
    Router.events.on('routeChangeError', () => NProgress.done())
  })

  return (
    <main>
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <Head />
          {!isSignInPage && (<Header />)}
          {children}
          {!isSignInPage && (<Footer />)}
        </React.Fragment>
      </ThemeProvider>
    </main>
  )
}

Layout.propTypes = {
  children: PropTypes.node
}

export default Layout
