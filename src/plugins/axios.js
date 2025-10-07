import axios from 'axios';

const api = axios.create({
  baseURL: 'https://tinker-backend-on5j.onrender.com/api/',
});

export default api;