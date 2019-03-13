import PropTypes from 'prop-types'
import { Button } from 'rbx'
import styled from 'styled-components'

const ButtonComponent = ({ children, color = 'black', type, className, isLoading, onClick }) => (
  <Button
    type={type}
    className={className}
    color={color}
    state={isLoading ? 'loading' : null}
    onClick={onClick}
  >
    {children}
  </Button>
)

ButtonComponent.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.string,
  color: PropTypes.string,
  children: PropTypes.node,
  isLoading: PropTypes.bool,
  onClick: PropTypes.func
}

const StyledButtonComponent = styled(ButtonComponent).withConfig({ componentId: 'dmi-ui-button' })`
  border-radius: 0;
  font-family: ${props => props.theme.bodyFont};
  font-weight: 700;
  font-size: ${props => props.theme.buttonFontSize};
  padding-left: ${props => (props.isNarrow ? '40px' : '70px')};
  padding-right: ${props => (props.isNarrow ? '40px' : '70px')};
`

export default StyledButtonComponent
