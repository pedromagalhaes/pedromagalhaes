import gql from 'graphql-tag'

export default (context, apolloClient) => apolloClient
  .query({
    query: gql`
      query findUserByToken($emailToken: String)  {
        user (emailToken: $emailToken) {
          id
          firstName
          lastName
          email
        }
      }

    `
  })
  .then(data => data)
  .catch(err => (err))
