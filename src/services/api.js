import axios from 'axios';

// change it for your address and port that is running on your server
const SERVER_API = 'http://192.168.0.10:3333';

const api = axios.create({
  baseURL: SERVER_API,
});

export default api;
