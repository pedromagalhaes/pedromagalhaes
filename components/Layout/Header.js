import React, { Component } from 'react'
import { Button, Input, Menu, Container, Dropdown, Icon } from 'semantic-ui-react'
import Link from 'next/link'

const trigger = (
  <span>
    <Icon name='user' /> Hello, Bob
  </span>
)

const options = [
  {
    key: 'user',
    text: (
      <span>
        Signed in as <strong>Bob Smith</strong>
      </span>
    ),
    disabled: true
  },
  { key: 'profile', text: 'Your Profile' },
  { key: 'stars', text: 'Your Stars' },
  { key: 'explore', text: 'Explore' },
  { key: 'integrations', text: 'Integrations' },
  { key: 'help', text: 'Help' },
  { key: 'settings', text: 'Settings' },
  { key: 'sign-out', text: 'Sign Out' }
]

const languageOptions = [
  { key: 'Arabic', text: 'Arabic', value: 'Arabic' },
  { key: 'Chinese', text: 'Chinese', value: 'Chinese' },
  { key: 'Danish', text: 'Danish', value: 'Danish' },
  { key: 'Dutch', text: 'Dutch', value: 'Dutch' },
  { key: 'English', text: 'English', value: 'English' },
  { key: 'French', text: 'French', value: 'French' },
  { key: 'German', text: 'German', value: 'German' },
  { key: 'Greek', text: 'Greek', value: 'Greek' },
  { key: 'Hungarian', text: 'Hungarian', value: 'Hungarian' },
  { key: 'Italian', text: 'Italian', value: 'Italian' },
  { key: 'Japanese', text: 'Japanese', value: 'Japanese' },
  { key: 'Korean', text: 'Korean', value: 'Korean' },
  { key: 'Lithuanian', text: 'Lithuanian', value: 'Lithuanian' },
  { key: 'Persian', text: 'Persian', value: 'Persian' },
  { key: 'Polish', text: 'Polish', value: 'Polish' },
  { key: 'Portuguese', text: 'Portuguese', value: 'Portuguese' },
  { key: 'Russian', text: 'Russian', value: 'Russian' },
  { key: 'Spanish', text: 'Spanish', value: 'Spanish' },
  { key: 'Swedish', text: 'Swedish', value: 'Swedish' },
  { key: 'Turkish', text: 'Turkish', value: 'Turkish' },
  { key: 'Vietnamese', text: 'Vietnamese', value: 'Vietnamese' }
]

export default class MenuExampleStackable extends Component {
  state = {}

  render() {
    return (
      <>
        <Menu size='small'>
          <Container>
            <Link href='/' as='/'>
              <Menu.Item>
                <img src='https://react.semantic-ui.com/logo.png' alt='' />
              </Menu.Item>
            </Link>
            <Menu.Menu position='right'>
              <Menu.Item>
                <Dropdown trigger={trigger} options={options} />
              </Menu.Item>
              <Link href='/login' as='/login'>
                <Menu.Item name='sign-in'>
                  <Button>Login</Button>
                </Menu.Item>
              </Link>
              <Link href='/register' as='/register'>
                <Menu.Item>
                  <Button secondary>Register</Button>
                </Menu.Item>
              </Link>
              <Menu.Item>
                <Button.Group>
                  <Dropdown
                    button
                    className='icon'
                    floating
                    labeled
                    icon='world'
                    options={languageOptions}
                    search
                    text='Select Language'
                  />
                </Button.Group>
              </Menu.Item>
            </Menu.Menu>
          </Container>
        </Menu>
        <Menu size='small'>
          <Container>
            <Link href='/' as='/'>
              <Menu.Item name='home' active>
                Home
              </Menu.Item>
            </Link>
            <Link href='/about' as='/about'>
              <Menu.Item name='about'>About</Menu.Item>
            </Link>
            <Link href='/blog' as='/blog'>
              <Menu.Item name='blog'>Blog</Menu.Item>
            </Link>
            <Link href='/contact' as='/contact'>
              <Menu.Item name='contact'>Contact</Menu.Item>
            </Link>
            <Link href='/portfolio' as='/portfolio'>
              <Menu.Item name='portfolio'>Portfolio</Menu.Item>
            </Link>
            <Link href='/services' as='/services'>
              <Menu.Item name='services'>Services</Menu.Item>
            </Link>
            <Menu.Menu position='right'>
              <Menu.Item>
                <Input icon='search' placeholder='Search...' />
              </Menu.Item>
            </Menu.Menu>
          </Container>
        </Menu>
      </>
    )
  }
}
