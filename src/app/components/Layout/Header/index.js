import { Menu, Container, Segment, Icon } from 'semantic-ui-react'
import Link from 'next/link'
import { withRouter } from 'next/router'
import PropTypes from 'prop-types'
import Logo from '@static/logo.svg'
import HeaderStyles from './index.styles'

const Header = () => (
  <>
    <HeaderStyles className='site-header'>
      <Segment inverted>
        <Menu inverted secondary>
          <Container>
            <Menu.Menu position='left'>
              <Link href='/' as='/'>
                <Menu.Item className='logo' position='left'>
                  <Logo />
                </Menu.Item>
              </Link>
            </Menu.Menu>
            {/*
              <Menu.Menu position='right'>
                <>
                  <Link href='/public/about' as='/about'>
                    <Menu.Item name='about' active={isActive('/about')}>
                      <span>02.</span> About
                    </Menu.Item>
                  </Link>
                  <Link href='/public/projects' as='/projects'>
                    <Menu.Item name='projects' active={isActive('/projects')}>
                      <span>03.</span> Projects
                    </Menu.Item>
                  </Link>
                  <Link href='/public/services' as='/services'>
                    <Menu.Item name='services' active={isActive('/services')}>
                      <span>04.</span> Services
                    </Menu.Item>
                  </Link>
                  <Link href='/public/blog' as='/blog'>
                    <Menu.Item name='blog' active={isActive('/blog')}>
                      <span>05.</span> Blog
                    </Menu.Item>
                  </Link>
                  <Link href='/public/contact' as='/contact'>
                    <Menu.Item name='contact' active={isActive('/contact')}>
                      <span>06.</span> Contact
                    </Menu.Item>
                  </Link>
                </>
              </Menu.Menu>
              */}
            <Menu.Menu position='right' className='social-icons'>
              <Menu.Item>
                <Icon size='large' name='github' />
              </Menu.Item>
              <Menu.Item>
                <Icon size='large' name='linkedin' />
              </Menu.Item>
              <Menu.Item>
                <Icon size='large' name='whatsapp' />
              </Menu.Item>
            </Menu.Menu>
          </Container>
        </Menu>
      </Segment>
    </HeaderStyles>
  </>
)

Header.propTypes = {
  router: PropTypes.object,
  user: PropTypes.object
}

export default withRouter(Header)
