import { StyleSheet } from 'react-native';

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

export default styles;
