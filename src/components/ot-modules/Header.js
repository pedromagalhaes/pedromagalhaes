import PropTypes from 'prop-types'
import React from 'react'
import { Container, Menu, Segment } from 'semantic-ui-react'
import Particles from 'react-particles-js'
import styled from 'styled-components'

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
          <Menu.Item position='right' as='a' className='active'>HOME</Menu.Item>
          <Menu.Item as='a'>ABOUT</Menu.Item>
          <Menu.Item as='a'>WORK</Menu.Item>
          <Menu.Item as='a'>CONTACT</Menu.Item>
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
