import React from 'react';
import ApolloClient from 'apollo-boost';
import { gql } from "apollo-boost";
import Button from 'antd/es/button';
import './App.css';
import { ApolloProvider } from '@apollo/react-hooks';
import { useQuery } from '@apollo/react-hooks';

const client = new ApolloClient({
  uri: 'http://localhost:4466',
});
/*
client
  .query({
    query: gql`
      {
        links {
          id
          description
          url
        }
      }
    `
  })
  .then(result => console.log(result));
*/
  const LINKS = gql`
  {
    links {
          id
          description
          url
        }
  }
`;


  function Links() {
    const { loading, error, data } = useQuery(LINKS);
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
  
    return data.links.map(({ id, description, url  }) => (
      <div key={id}>
        <p>
          {description}: {url}
        </p>
      </div>
    ));
  }

  const App: React.FC = () => (
    <ApolloProvider client={client}>
      <div>
        <h2>My first Apollo app </h2>
        <Button type="primary">Button</Button>
      </div>
    </ApolloProvider>
  );


export default App;
