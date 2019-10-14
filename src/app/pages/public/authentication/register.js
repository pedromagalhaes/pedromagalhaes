import React from 'react'

import withData from '@hoc/withData'
import checkLoggedIn from '@hoc/checkLoggedIn'
import { SignUp } from '@components'
import { redirect, parseUrls } from '@utils'

class SignUpPage extends React.Component {
  static async getInitialProps(context, apolloClient) {
    const { loggedInUser } = await checkLoggedIn(context, apolloClient)
    const domain = typeof context.req === 'undefined' ? window.location.href : context.req.headers.referer
    if (loggedInUser.user) {
      redirect(context, '/dashboard')
    }
    return {
      user: loggedInUser,
      domain: parseUrls(domain)
    }
  }

  render() {
    return (
      <>
        <SignUp {...this.props} />
      </>
    )
  }
}

export default withData(SignUpPage)
