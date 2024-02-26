
import axios from 'axios';

const baseURL = 'https://wordsapi-nkj3.onrender.com';

const api = axios.create({
  baseURL,
});

export default api;
