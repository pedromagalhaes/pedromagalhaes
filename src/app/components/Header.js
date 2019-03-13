/* eslint-disable */
import styled from 'styled-components'
import { Navbar, Container, Button } from 'rbx'
import Link from 'next/link'

const HeaderWrapper = styled.section`
  background: transparent;
`

const Header = () => (
  <HeaderWrapper className='cms-header'>
    <Navbar>
      <Container>
        <Navbar.Brand>
          <Navbar.Item href='/'>
            <img
              src='https://bulma.io/images/bulma-logo.png'
              alt=''
              role='presentation'
              width='112'
              height='28'
            />
          </Navbar.Item>
          <Navbar.Burger />
        </Navbar.Brand>
        <Navbar.Menu>
          <Navbar.Segment align='end'>
            <Link href='/' as='/'><Navbar.Item>Home</Navbar.Item></Link>
            <Link href='/about' as='/about'><Navbar.Item>About</Navbar.Item></Link>
            <Link href='/services' as='/services'><Navbar.Item>Services</Navbar.Item></Link>
            <Link href='/works' as='/works'><Navbar.Item>Works</Navbar.Item></Link>
            <Link href='/contacts' as='/contacts'><Navbar.Item>Contacts</Navbar.Item></Link>
            <Navbar.Item as='div'>
              <Button.Group>
                <Link href='/signup' as='/signup'>
                  <Button color='primary'>
                    <strong>Sign up</strong>
                  </Button>
                </Link>
                <Link href='/signin' as='/signin'>
                  <Button color='light'>
                    Login in
                  </Button>
                </Link>
              </Button.Group>
            </Navbar.Item>
          </Navbar.Segment>
        </Navbar.Menu>
      </Container>
    </Navbar>
  </HeaderWrapper>
)

export default Header
