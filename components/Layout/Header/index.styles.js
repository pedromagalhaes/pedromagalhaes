import styled from 'styled-components'

const HeaderStyles = styled.section`
  margin-bottom: 0;

  .ui.segment {
    border-radius: 0;
    padding: 15px 0 15px 0;
    box-shadow: none;
    background: #58668b;
  }

  .left.menu .logo.left.item {
    padding: 0;
    border: 0;
    margin: 0;

    svg {
      width: 36px;
      shape-rendering: geometricPrecision;
    }

    span {
      color: rgba(255, 255, 255, 0.9) !important;
      margin-left: 15px;
    }

    &::before {
      background: none;
    }
  }

  .ui.secondary.inverted.pointing.menu {
    border: none;
  }

  .ui.secondary.pointing.menu {
    border-bottom: none;
  }
`

export default HeaderStyles
