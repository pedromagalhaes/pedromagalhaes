import PropTypes from 'prop-types'
import { Icon, Header } from 'semantic-ui-react'

const ModuleTitle = ({ as, icon, text }) => (
  <Header as={as} attached='top'>
    <Icon name={icon} />
    <Header.Content>{text}</Header.Content>
  </Header>
)

ModuleTitle.propTypes = {
  as: PropTypes.string,
  icon: PropTypes.string,
  text: PropTypes.string
}

export default ModuleTitle
