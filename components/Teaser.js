import { Grid, Image, Card, Container } from 'semantic-ui-react'
import TeaserStyles from './Teaser.styles'

const CardComponent = () => (
  <TeaserStyles>
    <Container>
      <Grid columns={1}>
        <Grid.Row>
          <Grid.Column computer={16}>
            <Card fluid>
              <Image
                src='https://dummyimage.com/1665x705/bdbdbd/bdbdbd'
                fluid
              />
            </Card>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </TeaserStyles>
)

export default CardComponent
