import { compose, setDisplayName } from 'recompose'

import withData from '../hocs/withData'
import SignUpForm from '../components/SignUpForm'

const SignUpPage = () => (
  <SignUpForm />
)

export default compose(
  withData,
  setDisplayName('CmsSignUpPage')
)(SignUpPage)
