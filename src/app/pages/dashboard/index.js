import React from 'react'

import withData from '@hoc/withData'
import checkLoggedIn from '@hoc/checkLoggedIn'
import redirect from '@utils/redirect'
import { Profile } from '@components'

class Index extends React.Component {
  static async getInitialProps(context, apolloClient) {
    const { loggedInUser } = await checkLoggedIn(context, apolloClient)
    if (!loggedInUser.user) {
      redirect(context, '/')
    }
    return {
      user: loggedInUser
    }
  }

  render() {
    return (
      <>
        <Profile />
      </>
    )
  }
}

export default withData(Index)
