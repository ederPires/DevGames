import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/home/HomeScreen';
import GamesList from '../screens/games/GamesList'; // Ajuste o caminho conforme a estrutura do seu projeto

const Stack = createStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="GamesList">
        <Stack.Screen name="GamesList" component={GamesList} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
