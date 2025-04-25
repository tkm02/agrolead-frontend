import axios from 'axios';

const api = axios.create({
  baseURL: '', // Remplacez par votre URL d'API
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;