import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

// Importe seus componentes de tela
//import HomeScreen from './src/screens/home/HomeScreen';
//<Stack.Screen name="Home" component={HomeScreen} />
import GamesScreen from './src/screens/games/GamesScreen';
import { ApolloProvider } from '@apollo/client'; // Import ApolloProvider
import client from './src/apollo/apollo-client'; // Import the Apollo Client instance

// Crie uma pilha de navegação
const Stack = createStackNavigator();

function App() {
  return (
    <ApolloProvider client={client}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Game">
            <Stack.Screen name="Game" component={GamesScreen} />
          </Stack.Navigator>
      </NavigationContainer>

    </ApolloProvider>

  );
}
//<StatusBar style="auto" />
export default App;
