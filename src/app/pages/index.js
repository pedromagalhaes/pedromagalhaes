/* eslint-disable no-unused-vars */

import { compose, setDisplayName, setStatic } from 'recompose'

import { Teaser, AboutMe, Worked, OtherProjects, Projects } from '@components'

const Index = props => (
  <>
    <Teaser />
    <AboutMe />
    <Worked />
    <Projects />
    <OtherProjects />
  </>
)

export default Index
