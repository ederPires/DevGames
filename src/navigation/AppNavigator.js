import React from 'react';
import { Text, View, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

// Componente da tela GameScreen
function GameScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Detalhes do Jogo</Text>
      <Button
        title="Voltar para a Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}

// Componente da tela Home
export default function Home({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Tela Home</Text>
      <Button
        title="Ir para o Jogo"
        onPress={() => navigation.navigate('GameScreen')}
      />
    </View>
  );
}

// Componente principal que contém a navegação em pilha
export function AppStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Game" component={GameScreen} />
    </Stack.Navigator>
  );
}
