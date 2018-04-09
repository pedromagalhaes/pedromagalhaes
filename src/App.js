import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './styles/semantic.less'
import './styles/app.less'

import Header from './components/ot-modules/Header'
import Footer from './components/ot-modules/Footer'

import Home from './pages/Home'
import About from './pages/About'
import Work from './pages/Work'
import Contact from './pages/Contact'

const Layout = () => (
  <Router>
    <Fragment>
      <Header />
      <Route path='/' exact to='/' component={Home} />
      <Route path='/about' component={About} />
      <Route path='/work' component={Work} />
      <Route path='/contact' component={Contact} />
      <Footer />
    </Fragment>
  </Router>
)

export default Layout
