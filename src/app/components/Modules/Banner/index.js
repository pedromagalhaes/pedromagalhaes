import { Segment, Container, Header, Button } from 'semantic-ui-react'
import PropTypes from 'prop-types'

import BannerStyles from './index.styles'

const BannerComponent = ({ h1, h2, h3, description, buttonText }) => (
  <BannerStyles>
    <Segment textAlign='center' vertical>
      <Container>
        {h1 && <Header as='h1' content={h1} inverted />}
        {h2 && <Header as='h2' content={h2} inverted />}
        {h3 && <Header as='h3' content={h3} inverted />}
        {
          description && (
          <div className='description'>
            <p>
              {description}
            </p>
          </div>
          )
        }
        {
          buttonText && (
            <Button primary inverted size='big'>
              {buttonText}
            </Button>
          )
        }
      </Container>
    </Segment>
  </BannerStyles>
)

BannerComponent.propTypes = {
  h1: PropTypes.string,
  h2: PropTypes.string,
  h3: PropTypes.string,
  description: PropTypes.string,
  buttonText: PropTypes.string,
  buttonLink: PropTypes.string
}

export default BannerComponent
