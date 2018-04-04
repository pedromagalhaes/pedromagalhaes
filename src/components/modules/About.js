import React from 'react'
import {
  Grid,
  Header,
  Image,
  Segment
} from 'semantic-ui-react'

const About = () => (
  <Segment style={{ padding: '8em 0em' }} vertical>
    <Grid container stackable verticalAlign='middle'>
      <Grid.Row>
        <Grid.Column width={8}>
          <Header as='h3' style={{ fontSize: '2em' }}>ABOUT ME</Header>
          <p style={{ fontSize: '1.3em' }}>
              Since graduating with a Bachelor in Multimedia Technologies from Instituto Superior da Maia in 2014,
            Pedro has focused his professional career almost exclusively on Frontend Web Development.
          </p>
          <p style={{ fontSize: '1.3em' }}>He is Senior Software Engineer for DMI International and specializes in
            Reacts front-end. Pedro is especially interested in JavaScript, Next.js, ESLint, Node.js, Webpack, Babel
            and MongoDB.
          </p>
          <p style={{ fontSize: '1.3em' }}>When not online, Pedro can be found in Phnom Penh, Cambodia with his wife,
            Marisa - searching for the perfect vintage items for their home, trying out a new recipe in the kitchen,
            experimenting in gardening, or snuggling with their son Jaiden.
          </p>
        </Grid.Column>
        <Grid.Column floated='right' width={6}>
          <Image
            bordered
            rounded
            size='large'
            src='https://react.semantic-ui.com/assets/images/wireframe/image.png'
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Segment>
)

export default About
