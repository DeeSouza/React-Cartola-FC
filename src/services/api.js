import axios from 'axios';

const api = axios.create({
	baseURL: 'https://login.globo.com/api/',
});

export default api;
