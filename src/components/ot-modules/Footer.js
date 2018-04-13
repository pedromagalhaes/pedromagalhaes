import PropTypes from 'prop-types'
import React from 'react'
import {
  Container,
  Grid,
  Segment,
  Icon,
  List
} from 'semantic-ui-react'
import styled from 'styled-components'

const mID = 'otm-footer'

const Footer = props => (
  <Segment textAlign='center' vertical className={props.className}>
    <Container className={mID}>
      <Grid>
        <Grid.Row>
          <Grid.Column computer={8}>
            <List link floated='left'>
              <List.Item as='a' >© 2018 Pedro Magalhaes. All rights reserved.</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column computer={8}>
            <List floated='right'>
              <a href='https://github.com/pedromagalhaes' rel='noopener noreferrer' target='_blank'>
                <Icon name='github' style={{ marginLeft: '1em' }} />
              </a>
              <a href='https://twitter.com/pedromagalhaes' rel='noopener noreferrer' target='_blank'>
                <Icon name='twitter' style={{ marginLeft: '1em' }} />
              </a>
              <a href='https://instagram.com/p.magalhaes' rel='noopener noreferrer' target='_blank'>
                <Icon name='instagram' style={{ marginLeft: '1em' }} />
              </a>
              <a href='https://facebook.com/pedromagalhaes' rel='noopener noreferrer' target='_blank'>
                <Icon name='facebook' style={{ marginLeft: '1em' }} />
              </a>
            </List>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </Segment>
)

Footer.propTypes = {
  className: PropTypes.string
}

const StyledFooter = styled(Footer)`
&.ui.segment {
  position: absolute;
  bottom: 40px;
  width: 100%;
}
.${mID} {
  .ui.list .list > a.item, 
  .ui.list > a.item, 
  a {
    transition: color 0.5s ease;
    color: #999;    
  }
  .ui.list .list > a.item:hover, 
  .ui.list > a.item:hover, 
  a:hover {
    color: #fff;    
  }  
}
`
export default StyledFooter

