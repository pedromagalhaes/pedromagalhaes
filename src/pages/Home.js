import React, { Fragment } from 'react'

import Services from '../components/modules/Services'
import Works from '../components/modules/Works'
import Social from '../components/modules/Social'
import Contact from '../components/modules/Contact'
import Tagline from '../components/modules/Tagline'
import About from '../components/modules/About'

const Home = () => (
  <Fragment>
    <Tagline />
    <Services />
    <About />
    <Works />
    <Social />
    <Contact />
  </Fragment>
)

export default Home
