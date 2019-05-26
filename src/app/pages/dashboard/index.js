import React from 'react'
import { Teaser, AboutMe, Worked, OtherProjects, Projects } from '@components'

import checkLoggedIn from '@hoc/checkLoggedIn'
import redirect from '@utils/redirect'

class Index extends React.Component {
  static async getInitialProps(context, apolloClient) {
    const { loggedInUser } = await checkLoggedIn(context.apolloClient)
    console.log(loggedInUser)
    return { loggedInUser }
  }

  render() {
    return (
      <>
        <h1>Dashboard</h1>
      </>
    )
  }
}

export default (Index)
