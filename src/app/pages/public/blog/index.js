import React from 'react'

import withData from '@hoc/withData'
import checkLoggedIn from '@hoc/checkLoggedIn'
import { Teaser, AboutMe, Worked, OtherProjects, Projects } from '@components'

class Index extends React.Component {
  static async getInitialProps(context, apolloClient) {
    const { loggedInUser } = await checkLoggedIn(context, apolloClient)
    return {
      user: loggedInUser
    }
  }

  render() {
    return (
      <>
        <Teaser />
        <AboutMe />
        <Worked />
        <Projects />
        <OtherProjects />
      </>
    )
  }
}

export default withData(Index)
