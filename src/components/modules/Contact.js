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
  Form,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Message,
  Visibility,
  TextArea,
  Checkbox
} from 'semantic-ui-react'

const Contact = () => {
  return (
    <Segment style={{ padding: '6em 0em 5em 0em', border: 'none' }} vertical inverted>
      <Container>
        <Grid>
          <Grid.Row>
            <Grid.Column computer={7}>
              <Header as='h3' style={{ fontSize: '2em' }} inverted>GET IN TOUCH</Header>
              <p style={{ fontSize: '1.33em' }}>I'm currently building awesome websites at DMI International and am not looking for new work.</p>
              <p style={{ fontSize: '1.33em' }}>Currently I am not accepting freelance work, but I'd love to get coffee and get to know you, so don’t hesitate to get in touch.
            </p>
            </Grid.Column>
            <Grid.Column computer={8} floated='right'>
              <Form width={16}>
              <Grid>
                <Grid.Row>
                  <Grid.Column computer={8}>
                    <Form.Field width={16}>
                      <label style={{ color: '#fff' }}>First Name</label>
                      <input />
                    </Form.Field>
                  </Grid.Column>
                  <Grid.Column computer={8}>
                    <Form.Field>
                      <label style={{ color: '#fff' }}>Last Name</label>
                      <input />
                    </Form.Field>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <Form.Field>
                      <label style={{ color: '#fff' }}>Message</label>
                      <TextArea />
                    </Form.Field>
                  </Grid.Column>
                </Grid.Row>
                {/*
                <Grid.Row>
                  <Grid.Column>
                    <Button floated='right' type='submit'>Submit</Button>
                  </Grid.Column>
                </Grid.Row>
                */}
              </Grid>
              </Form>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  )
}

export default Contact