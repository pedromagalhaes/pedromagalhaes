import PropTypes from 'prop-types'
import { Content } from 'rbx'

const ContentComponent = props => (
  <Content {...props} />
)

ContentComponent.propTypes = {
  props: PropTypes.object
}

export default ContentComponent
