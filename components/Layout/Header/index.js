import { Menu, Container, Segment, Dropdown, Icon, Button } from 'semantic-ui-react'
import Link from 'next/link'

import HeaderStyles from './index.styles'
import Logo from '../../../static/logo.svg'

const trigger = (<span> <Icon name='world' size='large' /></span>)

const options = [
  { key: 'en', text: 'English (US)' },
  { key: 'pt', text: 'Português (PT)' },
  { key: 'es', text: 'Spanish (ES)' }
]

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
            <Menu.Menu position='right'>
              <>
                <Link href='/' as='/'>
                  <Menu.Item name='home' active>
                    <span>01.</span> Home
                  </Menu.Item>
                </Link>
                <Link href='/about' as='/about'>
                  <Menu.Item name='about'><span>02.</span> About</Menu.Item>
                </Link>
                <Link href='/portfolio' as='/portfolio'>
                  <Menu.Item name='portfolio'><span>03.</span> Portfolio</Menu.Item>
                </Link>
                <Link href='/services' as='/services'>
                  <Menu.Item name='services'><span>04.</span> Services</Menu.Item>
                </Link>
                <Link href='/blog' as='/blog'>
                  <Menu.Item name='blog'><span>05.</span> Blog</Menu.Item>
                </Link>
                <Link href='/contact' as='/contact'>
                  <Menu.Item name='contact'><span>06.</span> Contact</Menu.Item>
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
              <Menu.Item>
                <Button inverted>LOGIN</Button>
              </Menu.Item>
            </Menu.Menu>
          </Container>
        </Menu>
      </Segment>
    </HeaderStyles>
  </>
)

export default Header
