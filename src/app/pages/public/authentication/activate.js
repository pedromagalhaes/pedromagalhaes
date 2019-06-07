import React from 'react'
import { Teaser, Activate } from '@components'

import withData from '@hoc/withData'
import checkLoggedIn from '@hoc/checkLoggedIn'

class Index extends React.Component {
  static async getInitialProps(context, apolloClient) {
    const { loggedInUser } = await checkLoggedIn(context, apolloClient)
    console.log('CURRENT LOGGED IN USER IN HOMEPAGE')
    return {
      user: loggedInUser
    }
  }

  render() {
    return (
      <>
        <Teaser />
        <Activate />
      </>
    )
  }
}

export default withData(Index)
