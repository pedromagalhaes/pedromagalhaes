import gql from 'graphql-tag'

export default gql`
  mutation Signup(
    $firstName: String
    $lastName: String
    $email: String
    $password: String
    $emailToken: String
    $emailVerified: Boolean
  ) {
    signup(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
      emailToken: $emailToken
      emailVerified: $emailVerified
    ) {
      id
      firstName
      lastName
      email
      emailToken
      emailVerified
    }
  }
`
