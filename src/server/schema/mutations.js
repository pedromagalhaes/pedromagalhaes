const Kind = require('graphql/language')

const graphql = require('graphql')

const { GraphQLObjectType, GraphQLString, GraphQLBoolean, GraphQLScalarType } = graphql
const UserType = require('./types/user_type')
const AuthService = require('../passport/auth')

const CustomDate = new GraphQLScalarType({
  name: 'Date',
  description: 'Date custom scalar type',
  parseValue(value) {
    return new Date(value) // value from the client
  },
  serialize(value) {
    return value.getTime() // value sent to the client
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.INT) {
      return parseInt(ast.value, 10) // ast value is always in string format
    }
    return null
  }
})

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    signup: {
      type: UserType,
      args: {
        firstName: { type: GraphQLString },
        lastName: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString },
        emailToken: { type: GraphQLString },
        emailTokenExpiresAt: { type: CustomDate },
        isActive: { type: GraphQLBoolean }
      },
      resolve(parentValue, { firstName, lastName, email, password, emailToken, emailTokenExpiresAt, isActive }, req) {
        return AuthService.signup({
          firstName,
          lastName,
          email,
          password,
          emailToken,
          emailTokenExpiresAt,
          isActive,
          req
        })
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
      resolve(parentValue, { email, password }, req, res, next) {
        return AuthService.login({ email, password, req, res, next })
      }
    }
  }
})

module.exports = mutation
