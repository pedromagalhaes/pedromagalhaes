import PropTypes from 'prop-types'
import { Container } from 'rbx'

const ContainerComponent = (props) => {
  const { children } = props
  return (
    <Container {...props}>
      {children}
    </Container>
  )
}

ContainerComponent.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
}

export default ContainerComponent
