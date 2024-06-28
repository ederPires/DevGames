import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: 'http://192.168.0.16:4000/graphql', // substitua pela URL do seu servidor GraphQL
});

const authLink = setContext((_, { headers }) => {
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1NDI1OTE1Yy1kZTUzLTQ1ZjItOTQ0Zi1mYzVkZWQzYTlkZmQiLCJpYXQiOjE3MTk1MzY0MzMsImV4cCI6MTcxOTYyMjgzM30.VN2AO4NIOy5Rxb0cDwt9gNEpNspyO81moZ1OJ-jylB8"; // substitua pelo seu token JWT
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

export default client;
