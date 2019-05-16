const graphql = require('graphql')

const {
  GraphQLObjectType,
  GraphQLString
} = graphql
const UserType = require('./types/user_type')
const AuthService = require('../services/auth')

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    signup: {
      type: UserType,
      args: {
        firstName: { type: GraphQLString },
        lastName: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString }
      },
      resolve(parentValue, { firstName, lastName, email, password }, req) {
        return AuthService.signup({ firstName, lastName, email, password, req })
      }
    },
    logout: {
      type: UserType,
      resolve(parentValue, args, req) {
        const { user } = req
        req.logout()
        return user
      }
    },
    login: {
      type: UserType,
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString }
      },
      resolve(parentValue, { email, password }, req) {
        return AuthService.login({ email, password, req })
      }
    }
  }
})

module.exports = mutation
