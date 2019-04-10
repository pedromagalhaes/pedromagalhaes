import PropTypes from 'prop-types'
import Router from 'next/router'
import NProgress from 'nprogress'
import { ThemeProvider } from 'styled-components'

import theme from '../../theme/vars'
import Head from './Head'
import Header from './Header'
import layoutStyles from './index.styles'

const { useEffect } = React

const Layout = ({ children }) => {
  const GlobalStyles = layoutStyles(theme)

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
          <GlobalStyles />
          <Header />
          {children}
        </React.Fragment>
      </ThemeProvider>
    </main>
  )
}

Layout.propTypes = {
  children: PropTypes.node
}

export default Layout
