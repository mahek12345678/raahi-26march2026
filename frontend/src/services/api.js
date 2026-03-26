// API service using axios instance
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.example.com/', // replace with your API base URL
  timeout: 1000,
});

// Example API calls
api.get('/endpoint').then(response => console.log(response));

export default api;