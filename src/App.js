import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Button, Container, Icon, Menu, Responsive, Segment, Sidebar, Visibility } from 'semantic-ui-react'
import Particles from 'react-particles-js'

import './styling/semantic.less'
import './styling/app.less'

import Promotional from './components/ot-modules/Promotional'
import Tagline from './components/modules/Tagline'
import Services from './components/modules/Services'
import About from './components/modules/About'
import Social from './components/modules/Social'
import Works from './components/modules/Works'
import Contact from './components/modules/Contact'
import Footer from './components/ot-modules/Footer'

import PM from './static/svg/logo3.svg'

class DesktopContainer extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { children } = this.props
    const { fixed } = this.state

    return (
      <Responsive {...Responsive.onlyComputer}>
        <Visibility once={false}>
          <Segment inverted textAlign='center' style={{ minHeight:'733px', padding: '1em 0em' }} vertical>
            <Menu
              fixed={fixed ? 'top' : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size='large'
              style={{ border: 'none', background: 'none' }}
            >
              <Container style={{ zIndex: '10' }}>
                <PM style={{ height:'70px', width: '70px', marginRight: '40px', position: 'relative', top: '15px' }} />
                <Menu.Item position='right' as='a' className='active' style={{ border: 'none'}}>HOME</Menu.Item>
                <Menu.Item as='a'>ABOUT</Menu.Item>
                <Menu.Item as='a'>WORK</Menu.Item>
                <Menu.Item as='a'>CONTACT</Menu.Item>
                {/*
                  !fixed && (
                    <Menu.Item position='right'>
                      <a href='https://github.com/pedromagalhaes' target='_blank'><Icon name='github' /></a>
                      <a href='https://twitter.com/pedromagalhaes' target='_blank'><Icon name='twitter' style={{ marginLeft: '1em' }} /></a>
                      <a href='https://instagram.com/p.magalhaes' target='_blank'><Icon name='instagram' style={{ marginLeft: '1em' }} /></a>
                      <a href='https://facebook.com/pedromagalhaes' target='_blank'><Icon name='facebook' style={{ marginLeft: '1em' }} /></a>
                    </Menu.Item>
                  )
                */}
              </Container>
            </Menu>
            <Particles
              params={{
                particles: {
                  number: {
                    value: 50
                  },
                  line_linked: {
                    shadow: {
                      enable: false
                    }
                  }
                }
              }}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%'
              }}
            />
            <Promotional />
          </Segment>
        </Visibility>

        {children}
      </Responsive>
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node
}

class MobileContainer extends Component {
  state = {}

  handlePusherClick = () => {
    const { sidebarOpened } = this.state

    if (sidebarOpened) this.setState({ sidebarOpened: false })
  }

  handleToggle = () => this.setState({ sidebarOpened: !this.state.sidebarOpened })

  render() {
    const { children } = this.props
    const { sidebarOpened } = this.state

    return (
      <Responsive {...Responsive.onlyMobile}>
        <Sidebar.Pushable>
          <Sidebar as={Menu} animation='uncover' inverted vertical visible={sidebarOpened}>
            <Menu.Item as='a' active>Home</Menu.Item>
            <Menu.Item as='a'>Work</Menu.Item>
            <Menu.Item as='a'>Company</Menu.Item>
            <Menu.Item as='a'>Careers</Menu.Item>
            <Menu.Item as='a'>Log in</Menu.Item>
            <Menu.Item as='a'>Sign Up</Menu.Item>
          </Sidebar>

          <Sidebar.Pusher dimmed={sidebarOpened} onClick={this.handlePusherClick} style={{ minHeight: '100vh' }}>
            <Segment inverted textAlign='center' style={{ minHeight: 350, padding: '1em 0em' }} vertical>
              <Container>
                <Menu inverted pointing secondary size='large'>
                  <Menu.Item onClick={this.handleToggle}>
                    <Icon name='sidebar' />
                  </Menu.Item>
                  <Menu.Item position='right'>
                    <Button as='a' inverted>Log in</Button>
                    <Button as='a' inverted style={{ marginLeft: '0.5em' }}>Sign Up</Button>
                  </Menu.Item>
                </Menu>
              </Container>
              <Promotional mobile />
            </Segment>

            {children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Responsive>
    )
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node
}

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node
}

const HomepageLayout = () => (
  <ResponsiveContainer>
    <Tagline />
    <Services />
    <About />
    <Works />
    <Social />
    <Contact />
    <Footer />
  </ResponsiveContainer>
)

export default HomepageLayout
