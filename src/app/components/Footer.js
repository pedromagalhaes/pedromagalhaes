import styled from 'styled-components'
import { Footer, Container, Content } from 'rbx'

const HeaderWrapper = styled.section`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 1rem 0.75rem;
  text-align: left;

  a {
    color: inherit;
    border-bottom: 1px solid #666;
    font-weight: bold;
  }
`

const Header = () => (
  <HeaderWrapper className='cms-header'>
    <Footer>
      <Container>
        <Content>
          <p>
            <strong>rbx</strong> by <a href='https://github.com/dfee'>Devin Fee</a>.
      The source code is released under the{' '}
            <a href='https://opensource.org/licenses/mit-license.php'>
        MIT License
            </a>
      . The website content is licensed{' '}
            <a href='https://creativecommons.org/licenses/by-nc-sa/4.0/'>
        CC BY NC SA 4.0
            </a>
      .
          </p>
        </Content>
      </Container>
    </Footer>
  </HeaderWrapper>
)

export default Header
