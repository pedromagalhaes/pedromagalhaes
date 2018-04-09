import PropTypes from 'prop-types'
import React from 'react'
import { Container, Menu, Segment } from 'semantic-ui-react'
import Particles from 'react-particles-js'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import Promotional from '../../components/ot-modules/Promotional'
import LogoSvg from '../../static/svg/logo3.svg'
import particlesParams from '../../utils/particles-settings'

const mID = 'otm-header'

const Header = props => (
  <Segment inverted textAlign='center' vertical className={props.className}>
    <div className={mID}>
      <Menu inverted pointing secondary size='large'>
        <Container>
          <LogoSvg className={`${mID}__logo`} />
          <Menu.Item as={NavLink} exact to='/' content='HOME' position='right' />
          <Menu.Item as={NavLink} to='/about' content='ABOUT' />
          <Menu.Item as={NavLink} to='/work' content='WORKS' />
          <Menu.Item as={NavLink} to='/contact' content='CONTACT' />
        </Container>
      </Menu>
      <Particles params={particlesParams} />
      <Promotional />
    </div>
  </Segment>
)

Header.propTypes = {
  className: PropTypes.string
}

const StyledHeader = styled(Header)`
&.ui.inverted.segment, .ui.primary.inverted.segment {
  background: #000;
}
.${mID} {  
  min-height: 733px;
  padding: 1em 0em;  
  &__logo {
    height: 70px;
    width: 70px;
    margin-right: 40px;
    position: relative;
    top: 15px;
  }  
  .ui.menu {
    border: none;
    background: 0;
    .ui.container {
      z-index: 10;
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
