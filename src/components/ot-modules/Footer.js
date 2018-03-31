import React from 'react'
import {
  Container,
  Grid,
  Header,
  Segment,
  Menu,
  Icon,
  List
} from 'semantic-ui-react'

const Footer = () => {
  return (
    <Segment vertical style={{ padding: '5em 0em' }}>
      <Container>
        <Grid divided stackable>
          <Grid.Row>
            <Grid.Column width={8}>
              <List link>
                <List.Item as='a' style={{ color: '#000' }}>© 2018 Pedro Magalhaes. All rights reserved.</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={8}>
              <List floated='right'>
                <a href='https://github.com/pedromagalhaes' target='_blank'>
                  <Icon name='github' style={{ marginLeft: '1em', color: '#000' }} />
                </a>
                <a href='https://twitter.com/pedromagalhaes' target='_blank'>
                  <Icon name='twitter' style={{ marginLeft: '1em', color: '#000' }} />
                </a>
                <a href='https://instagram.com/p.magalhaes' target='_blank'>
                  <Icon name='instagram' style={{ marginLeft: '1em', color: '#000' }} />
                </a>
                <a href='https://facebook.com/pedromagalhaes' target='_blank'>
                  <Icon name='facebook' style={{ marginLeft: '1em', color: '#000' }} />
                </a>
              </List>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  )
}

export default Footer