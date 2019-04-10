import React, { Component } from 'react'
import { Button, Input, Menu, Container, Dropdown, Icon } from 'semantic-ui-react'

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
      disabled: true,
    },
    { key: 'profile', text: 'Your Profile' },
    { key: 'stars', text: 'Your Stars' },
    { key: 'explore', text: 'Explore' },
    { key: 'integrations', text: 'Integrations' },
    { key: 'help', text: 'Help' },
    { key: 'settings', text: 'Settings' },
    { key: 'sign-out', text: 'Sign Out' },
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
    { key: 'Vietnamese', text: 'Vietnamese', value: 'Vietnamese' },
  ]

export default class MenuExampleStackable extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <>

        <Menu size='small'>
          <Container>
            <Menu.Item>
              <img src="https://react.semantic-ui.com/logo.png" />
            </Menu.Item>
            <Menu.Menu position="right">
            <Menu.Item>
                <Dropdown trigger={trigger} options={options} />
              </Menu.Item>
              <Menu.Item name="sign-in">
                <Button>Login</Button>
              </Menu.Item>
              <Menu.Item>
                <Button secondary>Register</Button>
              </Menu.Item>              
              <Menu.Item>
              <Button.Group color='gray'>
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
            <Menu.Item name="features" active>
              Home
            </Menu.Item>
            <Menu.Item name="features">About</Menu.Item>
            <Menu.Item name="blog">Blog</Menu.Item>
            <Menu.Item name="contact">Contact</Menu.Item>
            <Menu.Item name="contact">Portfolio</Menu.Item>
            <Menu.Item name="services">Services</Menu.Item>
            <Menu.Menu position="right">
              <Menu.Item>
                <Input icon="search" placeholder="Search..." />
              </Menu.Item>
            </Menu.Menu>
          </Container>
        </Menu>
      </>
    )
  }
}
