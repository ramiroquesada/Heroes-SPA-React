import { heroesApi } from "../heroes/api/heroesApi";

export const getHeroesFetch = async () => {
	
	const {data} = await heroesApi('/all.json');

	return data;
};
