import React, { useEffect, useState } from 'react';
import { Text, View, FlatList, Image, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import api from '../../api'; // Certifique-se de que o caminho está correto
import styles from './styles'; // Importar os estilos
import logo from '../../assets/DevGames.png';
import search from '../../assets/search.png';
import save from '../../assets/linkSave.png'; // Remover espaços no nome do arquivo

const fetchWithRetry = async (url, retries = 3, delay = 1000) => {
  try {
    const response = await api.get(url);
    return response;
  } catch (error) {
    if (retries === 0) throw error;
    console.error('API Error:', error);
    await new Promise((res) => setTimeout(res, delay));
    return fetchWithRetry(url, retries - 1, delay * 2);
  }
};

export default function Home() {
  const [games, setGames] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetchWithRetry('/games');
        console.log('API Response:', response.data); // Log da resposta da API
        setGames(response.data.results);

        // Extraia as categorias dos jogos para a lista de categorias
        const gameCategories = response.data.results.map(game => game.genres).flat();
        const uniqueCategories = [...new Set(gameCategories.map(genre => genre.name))]; // Remover duplicatas
        setCategories(uniqueCategories);
      } catch (error) {
        console.error('API Error after retries:', error); // Log de erro após tentativas
      }
    };

    fetchGames();
  }, []);

  const filteredGames = games.filter(
    (game) =>
      game.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (selectedCategory ? game.genres.some(genre => genre.name === selectedCategory) : true)
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.logo} />
        <Image source={save} style={styles.save} />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar jogo..."
          placeholderTextColor="#F5F5F5"
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)}
        />
        <Image source={search} style={styles.search} />
      </View>

      <View style={styles.categoryList}>
        {categories.map((category, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.categoryItem,
              selectedCategory === category && styles.selectedCategoryItem,
            ]}
            onPress={() => setSelectedCategory(category === selectedCategory ? null : category)}
          >
            <Text style={styles.categoryText}>{category}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.centeredContent}>
        <Text style={styles.tituloContainer}>Jogos disponíveis</Text>
        <FlatList
          data={filteredGames}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.gameItem}>
              <View style={styles.imageContainer}>
                <Image
                  style={styles.gameImage}
                  source={{ uri: item.background_image }}
                  onError={() => console.log('Erro ao carregar a imagem')}
                />
                <Text style={styles.gameText}>{item.name}</Text>
              </View>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
}
