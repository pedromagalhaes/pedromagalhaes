import styled from 'styled-components'

const TeaserStyles = styled.section`
  background: #fff;

  .ui.fluid.card {
    margin-bottom: 0;
    padding-bottom: 0;
    border: none;
    border-radius: 0;
    box-shadow: none;
    overflow: hidden;
  }

  .ui.card > :first-child,
  .ui.cards > .card > :first-child {
    border-radius: 0 !important;
  }
`

export default TeaserStyles
