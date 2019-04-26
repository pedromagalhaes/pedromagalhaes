import styled from 'styled-components'

const FooterStyles = styled.section`
  padding: 0;
  margin: 0;

  .ui.segment {
    background: ${props => props.theme.color5};
    padding: 0;
    margin: 0;
  }

  .row:first-child {
    padding: 30px 0 20px 0;
  }

  .row:last-child {
    padding: 10px 0 30px 0;
    margin: 0;
    font-size: 12px;
    color: rgba(255, 255, 255, 0.5);
  }
`

export default FooterStyles
