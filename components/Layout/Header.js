
import { Container, Menu } from 'semantic-ui-react'
import Link from 'next/link'
import NoSSR from 'react-no-ssr'

const Header = () => {
  return (
      <Menu inverted>
        <Container>
          <Menu.Menu position='left'>
            <Link href='/' as='/'>
              <Menu.Item name='home'>
                Logo
              </Menu.Item>
            </Link>
          </Menu.Menu>
          <NoSSR>
            <Menu.Menu position='right'>
              <Menu.Item>
                Option
              </Menu.Item>
            </Menu.Menu>
          </NoSSR>
        </Container>
      </Menu>
  )
}

export default Header
