import gql from 'graphql-tag'

export default (context, apolloClient) => {
  apolloClient
    .query({
      query: gql`
      {
        user {
          id
          email
        }
      }
    `
    })
    .then(({ data }) => (({ loggedInUser: data }))
      .catch(e => (({ loggedInUser: {} }))))
}
