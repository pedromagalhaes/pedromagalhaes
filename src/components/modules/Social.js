import React from 'react'
import { Grid, Header, Segment } from 'semantic-ui-react'
import axios from 'axios'
import shortid from 'shortid'

import { INSTAGRAM_KEYS } from '../../config'

class Social extends React.Component {
  state = {
    instagramData: null,
    twitterData: null
  }

  componentDidMount() {
    const config = {
      instagramUserId: INSTAGRAM_KEYS.user_id,
      instagramToken: INSTAGRAM_KEYS.token
    }
    if (config.instagramUserId && config.instagramToken) {
      const allPromises = [
        this.getInstagram(config.instagramUserId, config.instagramToken),
        this.getTwitter(),
        this.getProducts()
      ]
      Promise.all(allPromises).then((response) => {
        this.setState({
          instagramData: response[0].data.data,
          twitterData: response[1].data
        })
      })
    }
  }

  getTwitter = () => axios.get('/api/twitter')

  getProducts = () => axios.get('/api/products')

  getInstagram = (userId, instagramToken) =>
    axios.get(`https://api.instagram.com/v1/users/${userId}/media/recent?access_token=${instagramToken}&count=6`)

  render() {
    const {
      twitterData,
      instagramData
    } = this.state

    if (!twitterData || !instagramData) {
      return null
    }
    const url = 'https://twitter.com/'

    return (
      <Segment vertical>
        <Grid container stackable verticalAlign='middle' style={{ padding: '8em 0em 4em 0em' }} columns='equal'>
          <Grid.Row>
            <Grid.Column>
              <Header as='h3' style={{ fontSize: '2em' }}>INSTAGRAM</Header>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            {instagramData.map(object =>
            (
              <Grid.Column key={shortid.generate()}>
                <a href={object.link} target='_blank'>
                  {/* src={object.images.standard_resolution.url} */}
                  <img
                    style={{ width: '100%' }}
                    src='https://react.semantic-ui.com/assets/images/wireframe/image.png'
                    alt='to be done'
                  />
                </a>
              </Grid.Column>
            ))}
          </Grid.Row>
        </Grid>
        <Grid container stackable verticalAlign='middle' style={{ padding: '0em 0em 8em 0em' }} columns='equal'>
          <Grid.Row>
            <Grid.Column>
              <Header as='h3' style={{ fontSize: '2em' }}>TWITTER</Header>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            {twitterData.map(object =>
          (
            <Grid.Column key={shortid.generate()}>
              <p>{object.text}</p>
              <a href={`${url}${object.user.screen_name}/status/${object.id_str}`} target='_blank'>
                <p>{object.created_at}</p>
              </a>
              <div>
                <a href={`${url}intent/retweet?tweet_id=${object.id_str}`} target='_blank'> RT </a>
                <a href={`${url}intent/favorite?tweet_id=${object.id_str}`} target='_blank'> FAV </a>
                <a href={`${url}intent/tweet?in_reply_to=${object.id_str}`} target='_blank'> REP </a>
              </div>
            </Grid.Column>
          ))}
          </Grid.Row>
        </Grid>
      </Segment>
    )
  }
}

export default Social
