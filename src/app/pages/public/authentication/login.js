import React from 'react'
import withData from '@hoc/withData'
import checkLoggedIn from '@hoc/checkLoggedIn'
import redirect from '@utils/redirect'
import { SignIn } from '@components'

class SignInPage extends React.Component {
  static async getInitialProps(context, apolloClient) {
    const { loggedInUser } = await checkLoggedIn(context, apolloClient)
    if (loggedInUser.user) {
      redirect(context, '/dashboard')
    }
    return {
      user: loggedInUser
    }
  }

  render() {
    return (
      <>
        <SignIn />
      </>
    )
  }
}

export default withData(SignInPage)
