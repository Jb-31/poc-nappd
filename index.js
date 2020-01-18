
const { ApolloServer, gql } = require('apollo-server');


const books = [
    {
      title: 'Harry Potter and the Chamber of Secrets',
      author: 'J.K. Rowling',
    },
    {
      title: 'Jurassic Park',
      author: 'Michael Crichton',
    },
  ];

  // Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
    Query: {
      books: () => books,
    },
  };

  // The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ 
    typeDefs: './src/schema.graphql',
    resolvers,
    playground: true, 
    introspection: true 
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});