import React from 'react';
import { View, Text, FlatList, Button } from 'react-native';
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

const GamesList = ({ navigation }) => {
  const { loading, error, data, refetch } = useQuery(GAMES_QUERY);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error.message}</Text>;

  return (
    <View>
      <FlatList
        data={data.games}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name}</Text>
            <Text>{item.description}</Text>
          </View>
        )}
      />
      <Button
        title="Create Game"
        onPress={() => navigation.navigate('CreateGame', { refetch })}
      />
    </View>
  );
};

export default GamesList;
