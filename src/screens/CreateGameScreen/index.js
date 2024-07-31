// CreateGameScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { useQuery, useMutation } from '@apollo/client';
import { GAMES_QUERY, GENRES_QUERY, CREATE_GAME_MUTATION } from '../../utils/queries';
import styles from './styles'; // Importar os estilos

const CreateGameScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [dateRelease, setDateRelease] = useState('');
  const [rating, setRating] = useState('');
  const [site, setSite] = useState('');
  const [urlImage, setUrlImage] = useState('');
  const [genreId, setGenreId] = useState('');

  const { data: genresData, loading: genresLoading, error: genresError } = useQuery(GENRES_QUERY);

  const [createGame, { loading, error }] = useMutation(CREATE_GAME_MUTATION, {
    onCompleted: () => {
      navigation.goBack(); // Navega de volta para a tela anterior após a criação do jogo
    },
    refetchQueries: [{ query: GAMES_QUERY }], // Reexecuta a query GetGames após a mutação
    onError: (error) => {
      console.error('Error creating game:', error);
    },
  });

  const handleSubmit = () => {
    createGame({
      variables: {
        data: {
          name,
          description,
          dateRelease,
          rating: parseFloat(rating), // Certifique-se de que o rating é um número
          site,
          urlImage,
          genreId,
        },
      },
    });
  };

  if (genresLoading) return <Text>Loading genres...</Text>;
  if (genresError) return <Text>Error loading genres.</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create a New Game</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
      />
      <TextInput
        style={styles.input}
        placeholder="Release Date (YYYY-MM-DD)"
        value={dateRelease}
        onChangeText={setDateRelease}
      />
      <TextInput
        style={styles.input}
        placeholder="Rating"
        value={rating}
        onChangeText={setRating}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Site"
        value={site}
        onChangeText={setSite}
      />
      <TextInput
        style={styles.input}
        placeholder="Image URL"
        value={urlImage}
        onChangeText={setUrlImage}
      />
      <Picker
        selectedValue={genreId}
        style={styles.picker}
        onValueChange={(itemValue) => setGenreId(itemValue)}
      >
        {genresData.genres.map((genreId) => (
          <Picker.Item key={genreId.id} label={genreId.name} value={genreId.id} />
        ))}
      </Picker>
      {error && <Text style={styles.errorText}>Error creating game. Please try again.</Text>}
      <Button title="Create Game" onPress={handleSubmit} disabled={loading} />
    </View>
  );
};

export default CreateGameScreen;
