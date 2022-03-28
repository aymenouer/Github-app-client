import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyles from './styles';
import Pages from './pages/index.js';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import { ToastContainer } from 'react-toastify';
const client = new ApolloClient({
  uri: 'https://githubapp-server.herokuapp.com/',
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <GlobalStyles />
    <Pages />
    <ToastContainer />
  </ApolloProvider>,
  document.getElementById('root')
);
