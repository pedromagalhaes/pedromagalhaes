import styled from 'styled-components'

const FooterStyles = styled.section`
  padding: 0;
  margin: 0;

  .ui.segment {
    background: ${props => props.theme.color1};
    padding: 0;
    margin: 0;
  }

  .row:first-child {
    padding: 70px 0 50px 0;
  }

  .row:last-child {
    padding: 10px 0 70px 0;
    margin: 0;
    font-size: 12px;
    color: rgba(255, 255, 255, 0.5);
  }
`

export default FooterStyles
