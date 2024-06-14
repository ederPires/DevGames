// src/App.js

import React, { useEffect, useState } from 'react';
import { Text, View, FlatList, Image, SafeAreaView, TextInput, TouchableOpacity  } from 'react-native';

import api from '../../api'; // Caminho para o arquivo api.js
import styles from './styles'; // Importar os estilos
import Logo from '../../assets/DevGames.png';

export default function Home() {
  const [games, setGames] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await api.get('/games');
        setGames(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchGames();
  }, []);

    // Função para filtrar os jogos com base na busca
    const filteredGames = games.filter(
      (game) =>
        game.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (selectedCategory ? game.category === selectedCategory : true)
    );

  // Lista de categorias disponíveis (pode ser obtida dinamicamente da API)
  const categories = ['Ação', 'Aventura', 'Estratégia', 'RPG', 'Esportes'];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={Logo} style={styles.logo} />
        {/* Campo de busca */}
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar jogo..."
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)}
        />
      </View>
      {/* Lista de categorias */}
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
