import styled from 'styled-components'

const Styles = styled.div`
  position: fixed;
  z-index: 100;
  background: #000;
  padding: 20px;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;

  svg {
    position: fixed;
    top: 50%;
    left: 50%;
    margin-top: -37px;
    margin-left: -37px;
    width: 75px;
    shape-rendering: geometricPrecision;
  }
`

export default Styles
