/* eslint-disable no-shadow, no-unused-vars, consistent-return */

const graphql = require('graphql')
const mongoose = require('mongoose')

const Song = mongoose.model('song')
const Lyric = mongoose.model('lyric')

const UserType = require('./types/user_type')
const AuthService = require('../services/auth')

const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLBoolean } = graphql

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    signup: {
      type: UserType,
      args: {
        firstName: { type: GraphQLString },
        lastName: { type: GraphQLString },
        email: { type: GraphQLString },
        emailToken: { type: GraphQLString },
        emailVerified: { type: GraphQLBoolean },
        password: { type: GraphQLString }
      },
      resolve(parentValue, { firstName, lastName, email, password, emailToken, emailVerified }, req) {
        return AuthService.signup({ firstName, lastName, email, password, emailToken, emailVerified, req })
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
        const resolveLogin = AuthService.login({ email, password, req, res, next })
        console.log('resolveLogin')
        return resolveLogin
      }
    },
    activateAccount: {
      type: UserType,
      args: {
        emailToken: { type: GraphQLString }
      },
      resolve(parentValue, { emailToken }, req, res, next) {
        const resolveActivateAccount = AuthService.activateAccount({ emailToken })
        console.log('resolve resolveActivateAccount', resolveActivateAccount)
        return resolveActivateAccount
      }
    }
  }
})

module.exports = mutation
