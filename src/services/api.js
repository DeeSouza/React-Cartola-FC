import axios from 'axios';

const proxy = 'https://cors-anywhere.herokuapp.com';

const api = axios.create({
	baseURL: `${proxy}/https://login.globo.com/api/`,
});

export default api;
