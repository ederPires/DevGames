// src/api.js

import axios from 'axios';

// Sua chave de API da RAWG
const API_KEY = '99bd982e034e44c8833e48a663e07091';

const api = axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: API_KEY,
  },
});

export default api;
