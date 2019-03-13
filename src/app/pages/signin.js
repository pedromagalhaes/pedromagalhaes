import { compose, setDisplayName } from 'recompose'

import withData from '../hocs/withData'
import LoginForm from '../components/LoginForm'

const SignInPage = () => (
  <LoginForm />
)

export default compose(
  withData,
  setDisplayName('CmsSignInPage')
)(SignInPage)
