import axios from 'axios';

// Création d'une instance axios avec une configuration de base
const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:3000/api',
  headers: {
    'Content-Type': 'application/json',
  }
});

// Intercepteur pour ajouter le token d'authentification à chaque requête
API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Services API organisés par fonctionnalité
const ApiService = {
  // Services d'authentification
  auth: {
    login: (credentials) => API.post('/auth/login', credentials),
    register: (userData) => API.post('/auth/register', userData),
    logout: () => {
      localStorage.removeItem('token');
      return Promise.resolve();
    }
  },
  
  // Services pour les produits
  products: {
    getAll: (params) => API.get('/products', { params }),
    getById: (id) => API.get(`/products/${id}`),
    create: (product) => API.post('/products', product),
    update: (id, product) => API.put(`/products/${id}`, product),
    delete: (id) => API.delete(`/products/${id}`),
    getByCategory: (categoryId) => API.get(`/products/category/${categoryId}`)
  },
  
  // Services pour les catégories
  categories: {
    getAll: () => API.get('/categories'),
    getById: (id) => API.get(`/categories/${id}`),
    create: (category) => API.post('/categories', category),
    update: (id, category) => API.put(`/categories/${id}`, category),
    delete: (id) => API.delete(`/categories/${id}`)
  },
  
  // Services pour les coopératives
  cooperatives: {
    getAll: () => API.get('/cooperatives'),
    getById: (id) => API.get(`/cooperatives/${id}`),
    create: (cooperative) => API.post('/cooperatives', cooperative),
    update: (id, cooperative) => API.put(`/cooperatives/${id}`, cooperative),
    delete: (id) => API.delete(`/cooperatives/${id}`)
  },
  
  // Service pour les factures
  invoices: {
    getAll: () => API.get('/invoices'),
    getById: (id) => API.get(`/invoices/${id}`),
    create: (invoice) => API.post('/invoices', invoice),
    update: (id, invoice) => API.put(`/invoices/${id}`, invoice),
    delete: (id) => API.delete(`/invoices/${id}`)
  }
  
  // Vous pouvez ajouter d'autres services selon les besoins de votre application
};

export default ApiService;