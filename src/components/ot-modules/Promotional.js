import React from 'react'
import { Container, Header } from 'semantic-ui-react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const mID = 'otm-promotional'

const Promotional = props => (
  <div className={props.className}>
    <div className={mID}>
      <Container text>
        <Header as='h1' content={'Hi, I\'m Pedro.'} inverted textAlign='center' />
        <Header as='h2' content='I design & build web applications.' inverted />
      </Container>
    </div>
  </div>
)

Promotional.propTypes = {
  className: PropTypes.string
}

const StyledPromotional = styled(Promotional)`
.${mID} {
  .ui.text.container {
    position: absolute;
    z-index: 100;
    top: 100px;
    left: 25%;
    right: 25%;
    width: 100%; 
    h1.ui.header {
      font-size: 4em;
      font-weight: normal;
      margin-bottom: 0px;
      margin-top: 3.4em;
    }
    h2.ui.header {
      font-size: 1.7em;
      font-weight: normal;
      margin-top: 0.5em;    
    }
  }
}
`
export default StyledPromotional

