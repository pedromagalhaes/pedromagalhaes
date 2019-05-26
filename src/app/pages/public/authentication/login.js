import React from 'react'
import { SignIn } from '@components'

import checkLoggedIn from '@hoc/checkLoggedIn'
import redirect from '@utils/redirect'

class SignInPage extends React.Component {
  static async getInitialProps(context) {
    const { loggedInUser } = await checkLoggedIn(context.apolloClient)

    if (loggedInUser && loggedInUser.user) {
      // Already signed in? No need to continue.
      // Throw them back to the main page
      redirect(context, '/')
    }

    return {}
  }

  render() {
    return (
      <>
        <SignIn />
      </>
    )
  }
}

export default SignInPage
