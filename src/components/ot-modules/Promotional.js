import PropTypes from 'prop-types'
import React, { Component } from 'react'

import {
  Container,
  Header
} from 'semantic-ui-react'

const HomepageHeading = ({ mobile }) => (
  <Container text style={{
    position: 'absolute',
    zIndex: 100,
    top: '100px',
    left: '25%',
    right: '25%',
    width: '100%'
  }}>
    <Header
      as='h1'
      content={'Hi, I\'m Pedro.'}
      inverted
      textAlign='center'
      style={{
        fontSize: mobile ? '2em' : '4em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: mobile ? '1.5em' : '3.4em'
      }}
    />
    <Header
      as='h2'
      content='I design & build web applications.'
      inverted
      style={{
        fontSize: mobile ? '1.5em' : '1.7em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.5em' : '0.5em'
      }}
    />
    {/*
    <Button primary size='huge'>
      Get Started
      <Icon name='right arrow' />
    </Button>
    */}
  </Container>
)

HomepageHeading.propTypes = {
  mobile: PropTypes.bool
}

export default HomepageHeading