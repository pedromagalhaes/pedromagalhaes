import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility
} from 'semantic-ui-react'

const Services = () => {
  return(
    <Segment style={{ padding: '8em 0em' }} vertical>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column width={4}>
            <Header as='h2' icon>
              <Icon name='unhide' />
              WEBSITE DESIGN
              <Header.Subheader>
                Each of my designs begins with a blank canvas which allows your content to guide the layout.
              </Header.Subheader>
            </Header>
          </Grid.Column>
          <Grid.Column width={4}>
            <Header as='h2' icon>
              <Icon name='code' />
              DEVELOPMENT
              <Header.Subheader>
                Responsive development will help make your website easily accessible across all devices.
              </Header.Subheader>
            </Header>
          </Grid.Column>
          <Grid.Column width={4}>
            <Header as='h2' icon>
              <Icon name='talk' />
              SOCIAL MEDIA
              <Header.Subheader>
                It's important to keep your brand consistent and recognizable across all platforms.
              </Header.Subheader>
            </Header>
          </Grid.Column>
          <Grid.Column width={4}>
            <Header as='h2' icon>
              <Icon name='search' />
              SEARCH ENGINE
              <Header.Subheader>
                Beat the competition when it comes to organic search traffic and increase high goals conversion.
              </Header.Subheader>
            </Header>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  )
}

export default Services