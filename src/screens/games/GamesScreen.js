import React from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import { useQuery, gql } from '@apollo/client';

const GAMES_QUERY = gql`
  query GetGames {
    games {
      id
      name
      description
      dateRelease
      rating
      site
      urlImage
      genre {
        id
        name
      }
    }
  }
`;

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  loadingText: {
    textAlign: 'center',
    marginTop: 32,
    fontSize: 18,
  },
  errorText: {
    textAlign: 'center',
    marginTop: 32,
    fontSize: 18,
    color: 'red',
  },
  gameContainer: {
    marginBottom: 16,
    padding: 16,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
  gameName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  gameDescription: {
    fontSize: 16,
    marginTop: 8,
  },
  createButton: {
    marginTop: 16,
  },
});

export default GamesScreen;
