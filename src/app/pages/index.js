/* eslint-disable no-unused-vars */

import { compose, setDisplayName, setStatic } from 'recompose'
import qs from 'query-string'
import withData from '@hoc/withData'
import activateAccount from '@hoc/activateAccount'
import checkLoggedIn from '@hoc/checkLoggedIn'

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

export default compose(
  withData,
  setDisplayName('Index'),
  setStatic('getInitialProps', async (context, apolloClient) => {
    const { loggedInUser } = await checkLoggedIn(context, apolloClient)
    const path = context.asPath ? context.asPath.replace('/', '') : '/'
    const qsParsed = qs.parse(path)
    const { emailToken } = qsParsed
    const token = typeof emailToken === 'string' ? emailToken : null
    const account = await activateAccount(context, apolloClient, token)
    console.log(account)

    return {
      user: loggedInUser,
      account,
      token
    }
  })
)(Index)
