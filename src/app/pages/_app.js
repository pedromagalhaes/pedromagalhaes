import App, { Container } from 'next/app'
import React from 'react'
import { ApolloProvider } from 'react-apollo'
import withApollo from '@hoc/withData'
import Layout from '@components/Layout'

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {}
    if (ctx.req && ctx.req.user) { pageProps.user = ctx.req.user }
    return { pageProps }
  }

  render() {
    const { Component, pageProps, apolloClient } = this.props
    return (
      <Container>
        <ApolloProvider client={apolloClient}>
          <Layout {...pageProps}>
            <Component {...pageProps} />
          </Layout>
        </ApolloProvider>
      </Container>
    )
  }
}

export default withApollo(MyApp)
