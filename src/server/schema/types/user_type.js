const graphql = require('graphql')

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLBoolean,
  GraphQLID
} = graphql

const UserType = new GraphQLObjectType({
  name: 'UserType',
  fields: {
    id: { type: GraphQLID },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    email: { type: GraphQLString },
    emailToken: { type: GraphQLString },
    emailTokenExpiresAt: { type: GraphQLString },
    isActive: { type: GraphQLBoolean }
  }
})

module.exports = UserType
