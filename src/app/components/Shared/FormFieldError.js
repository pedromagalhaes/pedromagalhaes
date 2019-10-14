import PropTypes from 'prop-types'
import styled from 'styled-components'

const Styles = styled.div`
  color: red;

  p {
    font-size: 15px;
    margin: 5px 0 0;
  }
`

const FormFieldError = ({ children }) => (
  <Styles>
    <p>{children}</p>
  </Styles>
)

FormFieldError.propTypes = {
  children: PropTypes.node
}

export default FormFieldError
