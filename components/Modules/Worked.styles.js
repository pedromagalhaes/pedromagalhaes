import styled from 'styled-components'

const WorkedStyles = styled.section`
  margin-bottom: 100px;

  h3.ui.header {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    white-space: nowrap;
    font-size: 32px;
    margin: 10px 0 0;
    color: #444;

    &::before {
      counter-increment: section 1;
      content: '0' counter(section) '.';
      margin-right: 10px;
      font-weight: normal;
      color: #444;
      font-size: 20px;
      position: relative;
      bottom: 0;
    }

    &::after {
      content: '';
      display: block;
      height: 1px;
      width: 100%;
      background-color: #444;
      position: relative;
      top: 2px;
      margin-left: 20px;
    }
  }

  h4.ui.header {
    color: #444;
    font-size: 22px;
    font-weight: 500;
    margin-bottom: 5px;

    span {
      font-size: 22px;
      font-weight: 500;

      a {
        color: #444;
      }
    }
  }

  h5.ui.header {
    font-size: 13px;
    font-weight: normal;
    letter-spacing: 0.5px;
    color: #444;
    margin-bottom: 30px;

    span {
      font-size: 13px;
      font-weight: normal;
      letter-spacing: 0.5px;
      color: #444;
    }
  }

  ul {
    font-size: 18px;
    padding: 0;
    margin: 0;
    list-style: none;

    li {
      position: relative;
      padding-left: 30px;
      margin-bottom: 10px;

      &::before {
        content: "▹";
        position: absolute;
        left: 0;
        color: #444;
        line-height: 20px;
      }
    }
  }

  .ui.attached.segment,
  .ui.vertical.tabular.menu .active.item,
  .ui.vertical.tabular.menu {
    border-color: #444;
  }

  .ui.vertical.tabular.menu .active.item {
    border-right: none !important;
    border-right-width: 0 !important;
  }
`

export default WorkedStyles
