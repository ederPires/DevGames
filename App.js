import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';
import { ApolloProvider } from '@apollo/client';
import client from './src/apollo/apollo-client';
import Navigation from './src/navigation/AppNavigator'; // Ajuste o caminho conforme a estrutura do seu projeto

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Navigation />
      <StatusBar style="auto" />
    </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
