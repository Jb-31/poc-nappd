
const { ApolloServer, gql } = require('apollo-server')
const { prisma } = require('./generated/prisma-client')
const typeDefs = require('./schema.graphql')

const resolvers = {
    Query: {
      info: () => `This is the API of a Hackernews Clone`,
      feed: (root, args, context, info) => {
        return context.prisma.links()
      },
    },
    Mutation: {
      post: (root, args, context) => {
        return context.prisma.createLink({
          url: args.url,
          description: args.description,
        })
      },
    },
  }

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ 
    typeDefs,
    resolvers,
    context: { prisma },
    playground: true, 
    introspection: true 
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});