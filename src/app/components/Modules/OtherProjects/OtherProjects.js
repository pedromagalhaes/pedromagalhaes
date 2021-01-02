import { Container, Header, Grid } from 'semantic-ui-react'

import OtherProjectItem from './OtherProjectItem'
import Styles from './OtherProjects.styles'

const CardComponent = () => (
  <Styles>
    <Container>
      <Grid>
        <Grid.Row>
          <Grid.Column computer='16'>
            <Header as='h3' content='Other Projects' inverted />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column computer='16'>
            <div className='project-grid'>
              <OtherProjectItem title='Omnibees' />
              <OtherProjectItem title='CM Faro' />
              <OtherProjectItem title='Autarquia 360' />
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </Styles>
)

export default CardComponent
