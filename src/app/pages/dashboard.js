/* eslint-disable */
import { compose, setDisplayName } from 'recompose'
import Link from 'next/link'

import checkLoggedIn from '../lib/checkLoggedIn'
import withData from '../hocs/withData'

class Dashboard extends React.Component {
  static async getInitialProps(context, apolloClient) {
    const { loggedInUser } = await checkLoggedIn(context, apolloClient)

    return { user: loggedInUser.profile }
  }

  render() {
    const { user } = this.props

    if (user) {
      return (
        <div>
          INside
        </div>
      )
    }

    return <div>Not found!</div>
  }
}

export default compose(
  withData,
  setDisplayName('Dashboard')
)(Dashboard)
