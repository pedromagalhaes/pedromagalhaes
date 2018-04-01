import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Button, Container, Divider, Grid, Header, Icon, Image, List, Menu, Responsive, Segment } from 'semantic-ui-react'
import styled, { injectGlobal } from 'styled-components'
import axios from 'axios'

import { INSTAGRAM_KEYS } from '../../config'

class Social extends React.Component {
  state = {
    instagramData: null,
    twitterData: null
  }

  getInstagram = (userId, instagramToken) => {
    return axios.get(`https://api.instagram.com/v1/users/${userId}/media/recent?access_token=${instagramToken}&count=6`)
  }

  componentDidMount() {
    const config = {
      instagramUserId: INSTAGRAM_KEYS.user_id,
      instagramToken: INSTAGRAM_KEYS.token
    }
    console.log(INSTAGRAM_KEYS)
    if (config.instagramUserId && config.instagramToken) {
      const allPromises = [
        this.getInstagram(config.instagramUserId, config.instagramToken)
      ]
      Promise.all(allPromises).then((response) => {
        this.setState({
          instagramData: response[0].data.data
        })
      })
    }
  }

  render() {
    const {
      instagramData
    } = this.state

    if (!instagramData) {
      return null
    }

    return (
    <Segment vertical>
      <Grid container stackable verticalAlign='middle' style={{ padding: '8em 0em 4em 0em' }} columns='equal'>
        <Grid.Row>
          <Grid.Column>
            <Header as='h3' style={{ fontSize: '2em' }}>INSTAGRAM</Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          {instagramData.map((object, i) =>
            <Grid.Column key={i}>
              <a href={object.link} target='_blank'>
                {/*src={object.images.standard_resolution.url} */}
                <img
                  style={{ width: '100%'}}
                  src='https://react.semantic-ui.com/assets/images/wireframe/image.png'
                />
              </a>
              {/*
              <p style={{fontWeight: 'bold', marginTop:'10px', marginBottom:'0' }}>{object.location ? object.location.name : ''}</p>
              <p>Likes: {object.likes ? object.likes.count : ''}</p>
              */}
            </Grid.Column>
          )}
        </Grid.Row>
      </Grid>
      <Grid container stackable verticalAlign='middle' style={{ padding: '0em 0em 8em 0em' }} columns='equal'>
        <Grid.Row>
          <Grid.Column>
            <Header as='h3' style={{ fontSize: '2em' }}>TWITTER</Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          {instagramData.map((object, i) =>
            <Grid.Column key={i}>
              <a href={object.link} target='_blank'>
                {/*src={object.images.standard_resolution.url} */}
                <img
                  style={{ width: '100%'}}
                  src='https://react.semantic-ui.com/assets/images/wireframe/image.png'
                />
              </a>
            </Grid.Column>
          )}
        </Grid.Row>
      </Grid>
    </Segment>
    )
  }
}

export default Social