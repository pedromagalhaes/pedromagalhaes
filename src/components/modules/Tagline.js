import PropTypes from 'prop-types'
import React from 'react'
import {
  Header,
  Segment
} from 'semantic-ui-react'

const Tagline = ({ mobile }) => (
  <Segment textAlign='center' style={{ padding: '3em 0em', backgroundColor: '#edeeef', border: 'none' }} vertical>
    <Header
      as='h2'
      content='I can help you build your next product.'
      style={{
        fontSize: mobile ? '2em' : '',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: mobile ? '1.5em' : '0'
      }}
    />
    <Header
      as='h3'
      content={'Have a project you\'d like to discuss?'}
      style={{
        fontSize: mobile ? '1.5em' : '',
        fontWeight: 'normal',
        marginTop: mobile ? '0.5em' : '0.5em'
      }}
    />
  </Segment>
)

Tagline.propTypes = {
  mobile: PropTypes.bool
}

export default Tagline
