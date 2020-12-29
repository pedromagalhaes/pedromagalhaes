import { object, func } from 'prop-types'
import Layout from '../components/Layout'
import 'semantic-ui-css/semantic.min.css'

const App = ({ Component, pageProps }) => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
)

App.propTypes = {
  Component: func,
  pageProps: object
}

export default App
