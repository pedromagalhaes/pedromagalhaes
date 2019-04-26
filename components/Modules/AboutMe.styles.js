import styled from 'styled-components'

const AboutMeStyles = styled.section`
  margin-bottom: 40px;

  h3.ui.header {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    white-space: nowrap;
    font-size: 32px;
    margin: 10px 0 0;
    color: ${props => props.theme.color5};

    &::before {
      counter-increment: section 1;
      content: '0' counter(section) '.';
      margin-right: 15px;
      font-weight: normal;
      color: ${props => props.theme.color5};
      font-size: 20px;
      position: relative;
      bottom: 0;
    }

    &::after {
      content: '';
      display: block;
      height: 1px;
      width: 100%;
      background-color: ${props => props.theme.color5};
      position: relative;
      top: 2px;
      margin-left: 20px;
    }
  }

  .bio {
    p {
      font-size: 17px;
    }
  }

  ul {
    display: grid;
    grid-template-columns: minmax(140px, 200px) minmax(140px, 200px);
    overflow: hidden;
    list-style: none;
    margin: 20px 0 0;
    padding: 0;

    li {
      position: relative;
      margin-bottom: 5px;
      padding-left: 20px;
      font-size: 14px;
      color: ${props => props.theme.color5};

      &::before {
        content: '▹';
        position: absolute;
        left: 0;
        color: ${props => props.theme.color5};
        font-size: 14px;
        line-height: 12px;
        top: 5px;
      }
    }
  }
`

export default AboutMeStyles
