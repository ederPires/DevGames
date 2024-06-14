import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#050B18',
    padding: 10,
    position: 'relative',
  },
  centeredContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 130, // Adiciona espaço suficiente para a logo
  },
  gameItem: {
    marginBottom: 10,
    alignItems: 'center',
  },
  imageContainer: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%', // Ocupar toda a largura disponível
  },
  gameImage: {
    width: 354,
    height: 169,
    resizeMode: 'cover',
    marginLeft: 4,
    marginRight: 4,
    marginBottom: 5,
  },
  gameText: {
    position: 'absolute',
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    padding: 8,
    left: 0,
    marginLeft: 25,
    bottom: 30,
  },
  logoContainer: {
    position: 'absolute',
    top: 20,
    left: 13,
    zIndex: 10, // Adicionado zIndex
  },
  logo: {
    width: 145,
    height: 35,
    resizeMode: 'contain',
    marginTop: 46,
    marginLeft: 13
  },
  searchInput: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    width: '100%',
  },
  categoryList: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  categoryItem: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#ddd',
  },
  selectedCategoryItem: {
    backgroundColor: '#007bff', // Cor de fundo quando a categoria está selecionada
  },
  categoryText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default styles;
