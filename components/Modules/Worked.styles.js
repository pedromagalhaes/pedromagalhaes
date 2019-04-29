import styled from 'styled-components'

const WorkedStyles = styled.section`
  background: ${props => props.theme.color6};
  padding: 45px 0 67px 0;

  .ui.vertical.tabular.menu .active.item,
  .ui.segment {
    background: none !important;
  }

  .ui.menu.fluid,
  .ui.vertical.menu.fluid {
    height: 265px;
  }

  h3.ui.header {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    white-space: nowrap;
    font-size: 32px;
    margin: 10px 0 0;
    color: ${props => props.theme.color1};
    font-weight: bold;

    &::before {
      counter-increment: section 2;
      content: '0' counter(section) '.';
      margin-right: 15px;
      font-weight: normal;
      color: ${props => props.theme.color1};
      font-size: 20px;
      position: relative;
      bottom: 0;
      display: none;
    }

    &::after {
      content: '';
      display: block;
      height: 1px;
      width: 100%;
      background-color: ${props => props.theme.color1};
      position: relative;
      top: 2px;
      margin-left: 20px;
      display: none;
    }
  }

  h4.ui.header {
    color: ${props => props.theme.color1};
    font-size: 22px;
    font-weight: 500;
    margin-bottom: 5px;

    span {
      font-size: 22px;
      font-weight: 500;

      a {
        color: ${props => props.theme.color1};
      }
    }
  }

  h5.ui.header {
    font-size: 13px;
    font-weight: normal;
    letter-spacing: 0.5px;
    color: ${props => props.theme.color1};
    margin-bottom: 30px;

    span {
      font-size: 13px;
      font-weight: normal;
      letter-spacing: 0.5px;
      color: ${props => props.theme.color1};
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
      color: ${props => props.theme.color1};

      &::before {
        content: "▹";
        position: absolute;
        left: 0;
        color: ${props => props.theme.color1} !important;
        line-height: 20px;
      }
    }
  }

  .ui.attached.segment,
  .ui.vertical.tabular.menu .active.item,
  .ui.vertical.tabular.menu {
    border-color: ${props => props.theme.color1};
    border-width: 2px;
  }

  .ui.vertical.tabular.menu .active.item {
    border-right: none !important;
    border-right-width: 0 !important;
    background: ${props => props.theme.color1} !important;
    color: ${props => props.theme.color6} !important;
  }

  .ui.attached.segment,
  .hDQpYG .ui.vertical.tabular.menu .active.item,
  .hDQpYG .ui.vertical.tabular.menu {
    border: none;
  }

  .ui.vertical.tabular.menu .item {
    color: ${props => props.theme.color1};

    &.active {
      color: ${props => props.theme.color2};
      font-weight: normal;
    }
  }
`

export default WorkedStyles
