import { Image, Container, Header, Grid } from 'semantic-ui-react'

import AboutMeStyles from './AboutMe.styles'

const CardComponent = () => (
  <AboutMeStyles>
    <Container>
      <Grid>
        <Grid.Row>
          <Grid.Column computer='16'>
            <Header as='h3' content='About Me' inverted />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column computer='9'>
            <div className='bio'>
              <p>
                  Hello! Im Pedro, a software engineer based in Boston, MA who enjoys building things that live on the
                  internet. I develop exceptional websites and web apps that provide intuitive, pixel-perfect user
                  interfaces with efficient and modern backends.
              </p>
              <p>
                  Shortly after graduating from Northeastern University, I joined the engineering team at Upstatement
                  where I work on a wide variety of interesting and meaningful projects on a daily basis.
              </p>
              <p>
                  Shortly after graduating from Northeastern University, I joined the engineering team at Upstatement
                  where I work on a wide variety of interesting and meaningful projects on a daily basis.
              </p>
              <p>Heres a few technologies Ive been working with recently:</p>
            </div>
            <ul>
              <li>JavaScript</li>
              <li>HTML &amp; SCSS</li>
              <li>React</li>
              <li>Vue</li>
              <li>Node.js</li>
              <li>Express</li>
              <li>GraphQL</li>
              <li>NativeScript</li>
            </ul>
          </Grid.Column>
          <Grid.Column computer='1' />
          <Grid.Column computer='6'>
            <Image src='https://dummyimage.com/500x500/27363b/dfdfdf' fluid />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </AboutMeStyles>
)

export default CardComponent
