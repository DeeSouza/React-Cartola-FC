import axios from 'axios';

const api = axios.create({
	baseURL: 'https://cors-anywhere.herokuapp.com/https://login.globo.com/api/',
});

export default api;
