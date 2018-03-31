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

const Social = () => {
  return (
    <Segment style={{ padding: '8em 0em' }} vertical>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column width={16}>
            <Header as='h3' style={{ fontSize: '2em' }}>SOCIAL MEDIA</Header>
            <p style={{ fontSize: '1.33em' }}>
              In the spring of 2003, during my first year of college at USU, I took a general education business course where we were assigned the task of building a webpage in Word. <br/> Thus began my love affair with design. After graduating I began working full time for a web design company. <br/>While I still enjoyed it, for the most part, I felt like something was missing. I wasn’t happy with the designs I was creating. They were “serious” and “corporate” and that just wasn’t me. <br/> When I made the move to freelance full time, I decided to let my quirky flag fly, so to speak.<br/> It may not be for everyone, but some people are going to love it.
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  )
}

export default Social