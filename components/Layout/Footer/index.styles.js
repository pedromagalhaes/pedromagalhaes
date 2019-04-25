import styled from 'styled-components'

const FooterStyles = styled.section`
  position: absolute; 
  bottom: 0;
  width: 100%;
  padding: 0;
  margin: 0;

  .ui.segment {
    background: #58668b;
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
    color: rgba(255,255,255,.5);
  }
`

export default FooterStyles
