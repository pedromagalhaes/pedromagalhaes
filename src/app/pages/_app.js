import App, { Container } from 'next/app'
import { ApolloProvider } from 'react-apollo'
import withApolloClient from '../hoc/with-apollo-client'

import Layout from '../components/Layout'

class MyApp extends App {
  render() {
    const { Component, pageProps, apolloClient } = this.props
    return (
      <Container>
        <Layout>
          <ApolloProvider client={apolloClient}>
            <Component {...pageProps} />
          </ApolloProvider>
        </Layout>
      </Container>
    )
  }
}

export default withApolloClient(MyApp)
