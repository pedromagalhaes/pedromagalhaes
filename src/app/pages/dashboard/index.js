import React from 'react'
import { Banner } from '@components'

import withData from '@hoc/withData'
import checkLoggedIn from '@hoc/checkLoggedIn'

class DashboardPage extends React.Component {
  static async getInitialProps(context, apolloClient) {
    const { loggedInUser } = await checkLoggedIn(context, apolloClient)
    return {
      user: loggedInUser
    }
  }

  render() {
    return (
      <>
        <Banner h2='Dashboard' />
      </>
    )
  }
}

export default withData(DashboardPage)
