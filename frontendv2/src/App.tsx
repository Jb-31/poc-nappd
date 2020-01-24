import React from 'react';
import ApolloClient from 'apollo-boost';
import { gql } from "apollo-boost";
import Button from 'antd/es/button';
import logo from './logo.svg';
import './App.css';

const client = new ApolloClient({
  uri: 'http://localhost:4466',
});

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

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Button type="primary">Button</Button>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
