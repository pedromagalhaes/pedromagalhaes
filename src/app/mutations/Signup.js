import gql from 'graphql-tag'

export default gql`
  mutation Signup(
    $firstName: String
    $lastName: String
    $email: String
    $password: String
    $emailToken: String
    $emailTokenExpiresAt: Date,
    $isActive: Boolean
  ) {
    signup(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
      emailToken: $emailToken
      emailTokenExpiresAt: $emailTokenExpiresAt,
      isActive: $isActive
    ) {
      id
      firstName
      lastName
      email
      emailToken
      emailTokenExpiresAt
      isActive
    }
  }
`
