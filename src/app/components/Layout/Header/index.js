import { Menu, Container, Segment, Dropdown, Icon, Button } from 'semantic-ui-react'
import Link from 'next/link'
import { withRouter } from 'next/router'
import PropTypes from 'prop-types'

import Logo from '@static/logo.svg'
import HeaderStyles from './index.styles'

const trigger = (
  <span>
    {' '}
    <Icon name='world' size='large' />
  </span>
)

const options = [
  { key: 'en', text: 'English (US)' },
  { key: 'pt', text: 'Português (PT)' },
  { key: 'es', text: 'Spanish (ES)' }
]

const Header = ({ router }) => {
  const isActive = url => !!(router.asPath === url)

  return (
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
              <Menu.Menu position='right'>
                <>
                  <Link href='/' as='/'>
                    <Menu.Item name='home' active={isActive('/')}>
                      <span>01.</span> Home
                    </Menu.Item>
                  </Link>
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
              <Menu.Menu position='right'>
                <Menu.Item>
                  <Dropdown trigger={trigger} options={options} />
                </Menu.Item>
                <Menu.Item>
                  <Icon size='large' name='search' />
                </Menu.Item>
                <Link href='/public/login' as='/login'>
                  <Menu.Item>
                    <Button inverted>LOGIN</Button>
                  </Menu.Item>
                </Link>
              </Menu.Menu>
            </Container>
          </Menu>
        </Segment>
      </HeaderStyles>
    </>
  )
}

Header.propTypes = {
  router: PropTypes.object
}

export default withRouter(Header)
