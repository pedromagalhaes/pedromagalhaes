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
    color: ${props => props.theme.color5};

    &::before {
      counter-increment: section 2;
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

  h4.ui.header {
    color: ${props => props.theme.color5};
    font-size: 22px;
    font-weight: 500;
    margin-bottom: 5px;

    span {
      font-size: 22px;
      font-weight: 500;

      a {
        color: ${props => props.theme.color5};
      }
    }
  }

  h5.ui.header {
    font-size: 13px;
    font-weight: normal;
    letter-spacing: 0.5px;
    color: ${props => props.theme.color5};
    margin-bottom: 30px;

    span {
      font-size: 13px;
      font-weight: normal;
      letter-spacing: 0.5px;
      color: ${props => props.theme.color5};
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
        color: ${props => props.theme.color5};
        line-height: 20px;
      }
    }
  }

  .ui.attached.segment,
  .ui.vertical.tabular.menu .active.item,
  .ui.vertical.tabular.menu {
    border-color: ${props => props.theme.color5};
  }

  .ui.vertical.tabular.menu .active.item {
    border-right: none !important;
    border-right-width: 0 !important;
  }

  .ui.attached.segment,
  .hDQpYG .ui.vertical.tabular.menu .active.item,
  .hDQpYG .ui.vertical.tabular.menu {
    border: none;
  }

  .ui.vertical.tabular.menu .item {
    color: ${props => props.theme.color5};
  }
`

export default WorkedStyles
