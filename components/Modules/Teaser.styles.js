import styled from 'styled-components'

const TeaserStyles = styled.section`
  margin-bottom: 50px;

  .ui.segment {
    padding: 50px 0 67px 0;
    background: #ddd;
    text-align: left;
  }

  h1.ui.header {
    font-size: 17px;
    font-family: ${props => props.theme.bodyFont};
    font-weight: 400;
    margin: 0 0 5px 5px;
    color: #444;
  }

  h2.ui.header {
    font-size: 70px;
    line-height: 1.1;
    margin: 0;
    color: #444;
    font-family: ${props => props.theme.bodyFont};
  }

  h3.ui.header {
    font-size: 70px;
    line-height: 1.1;
    color: #444;
    margin: 0 0 35px 0;
    font-family: ${props => props.theme.bodyFont};
  }

  .description {
    margin-bottom: 50px;
    max-width: 510px;

    p {
      font-size: 18px;
      color: #444;
      font-family: ${props => props.theme.bodyFont};
    }
  }

  .ui.inverted.primary.button,
  .ui.inverted.primary.buttons .button {
    color: #444 !important;
    box-shadow: 0 0 0 2px #444 inset !important;
    font-family: ${props => props.theme.bodyFont};
    font-weight: 400;

    &:hover,
    &:active,
    &:focus {
      background: #444;
      color: #fff !important;
    }
  }
`

export default TeaserStyles
