import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
  Button,
  Container,
  Divider,
  Grid,
  Card,
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

const Works = () => {
  return(
    <Segment style={{padding: '0em'}} vertical>
      <Grid celled='internally' columns='equal' stackable>
        <Grid.Row textAlign='center'>
          <Grid.Column style={{padding: '0', margin: '0'}}>
            <Image src='https://react.semantic-ui.com/assets/images/wireframe/image.png' style={{borderRadius: 'none', border: 'none' }} />
            <Card style={{padding: '0', margin: '0', width: '100%', border: 'none', boxShadow: 'none', borderRadius: '0' }}>
              <Card.Content style={{border: 'none', boxShadow: '0'}}>
                <Card.Header>
                  Project name
                </Card.Header>
                <Card.Meta>
                <span className='date'>
                  Developer Role
                </span>
                </Card.Meta>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column style={{padding: '0', margin: '0'}}>
            <Image src='https://react.semantic-ui.com/assets/images/wireframe/image.png' style={{borderRadius: 'none', border: 'none' }} />
            <Card style={{padding: '0', margin: '0', width: '100%', border: 'none', boxShadow: 'none', borderRadius: '0' }}>
              <Card.Content style={{border: 'none', boxShadow: '0'}}>
                <Card.Header>
                  Project name
                </Card.Header>
                <Card.Meta>
                <span className='date'>
                  Developer Role
                </span>
                </Card.Meta>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column style={{padding: '0', margin: '0'}}>
            <Image src='https://react.semantic-ui.com/assets/images/wireframe/image.png' style={{borderRadius: 'none', border: 'none' }} />
            <Card style={{padding: '0', margin: '0', width: '100%', border: 'none', boxShadow: 'none', borderRadius: '0' }}>
              <Card.Content style={{border: 'none', boxShadow: '0'}}>
                <Card.Header>
                  Project name
                </Card.Header>
                <Card.Meta>
                <span className='date'>
                  Developer Role
                </span>
                </Card.Meta>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column style={{padding: '0', margin: '0'}}>
            <Image src='https://react.semantic-ui.com/assets/images/wireframe/image.png' style={{borderRadius: 'none', border: 'none' }} />
            <Card style={{padding: '0', margin: '0', width: '100%', border: 'none', boxShadow: 'none', borderRadius: '0' }}>
              <Card.Content style={{border: 'none', boxShadow: '0'}}>
                <Card.Header>
                  Project name
                </Card.Header>
                <Card.Meta>
                <span className='date'>
                  Developer Role
                </span>
                </Card.Meta>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column style={{padding: '0', margin: '0'}}>
            <Image src='https://react.semantic-ui.com/assets/images/wireframe/image.png' style={{borderRadius: 'none !important', border: 'none' }} />
            <Card style={{padding: '0', margin: '0', width: '100%', border: 'none', boxShadow: 'none', borderRadius: '0' }}>
              <Card.Content style={{border: 'none', boxShadow: '0'}}>
                <Card.Header>
                  Project name
                </Card.Header>
                <Card.Meta>
                <span className='date'>
                  Developer Role
                </span>
                </Card.Meta>
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  )
}

export default Works