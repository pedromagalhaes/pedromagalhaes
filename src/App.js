import React, { Fragment } from 'react'
import Route from 'react-router-dom/Route'
import { Responsive, Dimmer, Loader, Segment } from 'semantic-ui-react'

import './styles/semantic.less'
import './styles/app.less'

import Home from './pages/Home'
import About from './pages/About'
import Work from './pages/Work'
import Contact from './pages/Contact'
import Footer from './components/ot-modules/Footer'

class Layout extends React.Component {
  state = {
    isLoading: true
  }

  componentDidMount() {
    this.onLoadPage()
  }

  onLoadPage = () => {
    setTimeout(() => {
      this.setState({
        isLoading: false
      })
    }, 100)
  }

  render() {
    if (this.state.isLoading) {
      return (
        <Segment className='site-loader'>
          <Dimmer active>
            <Loader>Loading</Loader>
          </Dimmer>
        </Segment>
      )
    }

    return (
      <Fragment>

        {this.state.isLoading &&
        <Segment>
          <Dimmer active>
            <Loader>Loading</Loader>
          </Dimmer>
        </Segment>
        }


        <Route path='/' exact to='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/work' component={Work} />
        <Route path='/contact' component={Contact} />

        <Responsive as='div' minWidth={992}>
          <Footer />
        </Responsive>

      </Fragment>
    )
  }
}

export default Layout
