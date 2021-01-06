import { Tab, Container, Header, Grid } from 'semantic-ui-react'
import WorkedStyles from './Worked.styles'

const panes = [
  {
    menuItem: 'Digital Management',
    render: () => (
      <Tab.Pane>
        <Header as='h4' inverted>
          <span>Senior Software Engineer</span>
          <span className='company'>
            <a href='https://www.dminc.com/' target='_blank' rel='nofollow noopener noreferrer'>
              &nbsp;@ Digital Management
            </a>
          </span>
        </Header>
        <Header as='h5' inverted>
          <span>Jun 2014 - Current</span>
        </Header>
        <div>
          <ul>
            <li>Frontend architecture for web applications in React and NodeJS</li>
            <li>Task automation, bundlers, linters, speed and load performance, monorepos</li>
            <li>Code reviews, automated tests, OWASP security</li>
            <li>Crash report and monitoring tools</li>
            <li>Continuous integration, delivery, testing, deployment</li>
            <li>Analytics, SEO and Social Media</li>
          </ul>
        </div>
      </Tab.Pane>
    )
  },
  {
    menuItem: 'Visualforma',
    render: () => (
      <Tab.Pane>
        <Header as='h4' inverted>
          <span>Lead Frontend Engineer</span>
          <span className='company'>
            <a href='https://www.visualforma.pt/en/' target='_blank' rel='nofollow noopener noreferrer'>
              &nbsp;@ Visualforma
            </a>
          </span>
        </Header>
        <Header as='h5' inverted>
          <span>Jun 2010 - May 2014</span>
        </Header>
        <div>
          <ul>
            <li>Front End Development in PHP &amp; .NET projects</li>
            <li>Mobile and Responsive Web</li>
            <li>Front End Security</li>
            <li>Usability and Accessibility Evaluation</li>
            <li>A/B Tests, Web Analytics</li>
            <li>Search Engine Optimization</li>
          </ul>
        </div>
      </Tab.Pane>
    )
  },
  {
    menuItem: 'Porto City Hall',
    render: () => (
      <Tab.Pane>
        <Header as='h4' inverted>
          <span>Full Stack Developer</span>
          <span className='company'>
            <a href='https://www.dminc.com/' target='_blank' rel='nofollow noopener noreferrer'>
              &nbsp;@ Porto City Hall
            </a>
          </span>
        </Header>
        <Header as='h5' inverted>
          <span>Feb 2009 - Jul 2009</span>
        </Header>
        <div>
          <ul>
            <li>Software Development in PHP</li>
            <li>Usability and Accessibility Evaluation</li>
            <li>Web Performance, Refactoring</li>
            <li>Bug Testing &amp; Fixing</li>
          </ul>
        </div>
      </Tab.Pane>
    )
  },
  {
    menuItem: 'Freelancer',
    render: () => (
      <Tab.Pane>
        <Header as='h4' inverted>
          <span>Full Stack Developer</span>
          <span className='company'>
            <a href='https://www.pedromagalhaes.com/' target='_blank' rel='nofollow noopener noreferrer'>
              &nbsp;@ Pedro Magalhães
            </a>
          </span>
        </Header>
        <Header as='h5' inverted>
          <span>Jun 2007 - Jul 2009</span>
        </Header>
        <div>
          <ul>
            <li>Software Development in PHP & MySQL</li>
            <li>Setup of CMS such Wordpress, Magento, others</li>
            <li>Usability and Accessibility Evaluation</li>
            <li>Web Performance, Refactoring</li>
            <li>Bug Testing &amp; Fixing</li>
          </ul>
        </div>
      </Tab.Pane>
    )
  }
]

const CardComponent = () => (
  <WorkedStyles>
    <Container>
      <Grid>
        <Grid.Row>
          <Grid.Column computer='16'>
            <Header as='h3' content='Experience' inverted />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column computer='16'>
            <div className='tabs'>
              <Tab grid={{ paneWidth: 12, tabWidth: 4 }} menu={{ fluid: true, vertical: true, tabular: true }} panes={panes} />
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </WorkedStyles>
)

export default CardComponent
