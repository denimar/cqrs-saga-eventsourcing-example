import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './layouts/App';
import * as serviceWorker from './serviceWorker';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { SERVER_HOST } from './utils/constants';

const graphQlClient = new ApolloClient({
  uri: SERVER_HOST,
  cache: new InMemoryCache()
});

ReactDOM.render(
  <React.StrictMode>
    <App graphQlClient={ graphQlClient } />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
