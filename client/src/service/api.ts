import {
  ApolloClient,
  InMemoryCache
} from '@apollo/client';

const isDevEnv = process.env.REACT_APP_NODE_ENV === 'development';

export const client = isDevEnv ? new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache()
}) : new ApolloClient({
  uri: 'https://api.kaganhamzacebi.com',
  cache: new InMemoryCache()
});
