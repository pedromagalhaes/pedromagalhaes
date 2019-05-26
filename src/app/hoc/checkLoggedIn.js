import gql from 'graphql-tag'

export default apolloClient => apolloClient
  .query({
    query: gql`
        query getUser {
          user {
            id
          }
        }
      `
  })
  .then(({ data }) => {
    console.log('data', data)
    return data
  })
  .catch(() =>
  // Fail gracefully
    ({ loggedInUser: {} }))
