// apollo.js

import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import AsyncStorage from '@react-native-async-storage/async-storage';

const httpLink = createHttpLink({
  uri: 'http://localhost:3000/graphql', // URL do seu servidor GraphQL
});

const authLink = setContext(async (_, { headers }) => {
  // Recupera o token de autenticação do AsyncStorage
  const token = await AsyncStorage.getItem('token');

  // Retorna os headers com o token de autenticação, se disponível
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});w

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
