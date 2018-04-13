import PropTypes from 'prop-types'
import React from 'react'
import { Container, Menu, Segment, Responsive, Dimmer, Loader } from 'semantic-ui-react'
import Particles from 'react-particles-js'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

import Promotional from '../../components/ot-modules/Promotional'
import LogoSvg from '../../static/svg/logo-01.svg'
import particlesParams from '../../utils/particles-settings'

const mID = 'otm-header'
const windowHeight = window.innerHeight - 28
const windowWidth = window.innerWidth

class Header extends React.Component {
  state = {
    isLoading: true
  }

  componentDidMount() {
    this.onLoad()
  }

  onLoad = () => {
    this.setState({
      isLoading: false
    })
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

    const isHeadline = this.props ? 'isHeadline' : ''

    return (
      <Segment inverted textAlign='center' vertical className={`${this.props.className} ${isHeadline}`}>
        <div className={mID}>
          <Menu inverted pointing secondary size='large'>

            <Responsive as={Container} minWidth={992}>
              <LogoSvg className={`${mID}__logo`} />
              <Menu.Item as={NavLink} exact to='/' content='HOME' position='right' />
              <Menu.Item as={NavLink} to='/about' content='ABOUT' />
              <Menu.Item as={NavLink} to='/work' content='WORKS' />
              <Menu.Item as={NavLink} to='/contact' content='CONTACT' />
            </Responsive>

          </Menu>
          <Particles params={particlesParams} />
          <Promotional />
        </div>
      </Segment>
    )
  }
}

Header.propTypes = {
  className: PropTypes.string
}

const StyledHeader = styled(Header)`
&.ui.inverted.segment, .ui.primary.inverted.segment {
  background: #000;
}
.${mID} {  
  height: ${windowHeight}px;
  width: ${windowWidth}px;
  
  &__logo {
    height: 75px;
    width: 75px;
    position: relative;
    top: 34px;
    background: none;
    left: -10px;
  }  
  .ui.menu {
    border: none;
    background: 0;
    position: absolute;
    width: 100%;
    top: 0px;
    .ui.container {
      z-index: 10;
    }
  }
  .ui.secondary.inverted.pointing.menu .item {
    position: relative;
    top: -11px;
    &.active {
      border: none;
    }
    &:last-child {
      padding-right: 4px;
    }
  }
  canvas {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
`
export default StyledHeader
