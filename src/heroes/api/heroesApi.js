import axios from "axios";

export const heroesApi = axios.create({
	baseURL: 'https://akabab.github.io/superhero-api/api',
})