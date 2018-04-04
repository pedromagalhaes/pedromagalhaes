import React, { Fragment } from 'react'

import './styling/semantic.less'
import './styling/app.less'

import Header from './components/ot-modules/Header'
import Footer from './components/ot-modules/Footer'
import Home from './pages/Home'

const Layout = () => (
  <Fragment>
    <Header />
    <Home />
    <Footer />
  </Fragment>
)

export default Layout
