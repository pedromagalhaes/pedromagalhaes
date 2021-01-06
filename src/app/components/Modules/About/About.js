import { Image, Container, Header, Grid } from 'semantic-ui-react'

import AboutMeStyles from './About.styles'

const AboutMe = () => (
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
                Hello! I&apos;m Pedro, a software engineer based in Portugal, who enjoys building things that live on
                the internet. I develop exceptional websites and web apps that provide intuitive, pixel-perfect user
                interfaces with efficient and modern backends.
              </p>
              <p>Here&#39;s a few technologies I&#39;ve been working with recently:</p>
            </div>
            <ul>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Next.js</li>
              <li>Node</li>
              <li>Webpack</li>
              <li>Storybook</li>
              <li>Lerna</li>
              <li>Cypress</li>
              <li>Jest</li>
              <li>Babel</li>
              <li>ESLint</li>
              <li>Microservices</li>
              <li>Docker</li>
              <li>Jenkins</li>
            </ul>
          </Grid.Column>
          <Grid.Column computer='2' />
          <Grid.Column computer='5'>
            <Image src='https://dummyimage.com/500x500/000000/dfdfdf' fluid />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </AboutMeStyles>
)

export default AboutMe
