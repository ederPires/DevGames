import React from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import { useQuery } from '@apollo/client';
import styles from './styles'; // Importar os estilos
import { GAMES_QUERY } from '../../utils/queries';

const GamesScreen = ({ navigation }) => {
  const { loading, error, data, refetch } = useQuery(GAMES_QUERY);

  if (loading) return <Text style={styles.loadingText}>Loading...</Text>;

  if (error) {
    console.error('Error fetching games:', error);
    return <Text style={styles.errorText}>Error fetching games. Please try again later.</Text>;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={data.games}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.gameContainer}>
            <Text style={styles.gameName}>{item.name}</Text>
            <Text style={styles.gameDescription}>{item.description}</Text>
          </View>
        )}
      />
      <Button
        title="Create Game"
        onPress={() => navigation.navigate('CreateGame', { refetch })}
        style={styles.createButton}
      />
    </View>
  );
};

export default GamesScreen;
