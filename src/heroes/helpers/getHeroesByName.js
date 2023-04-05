
import { getHeroesFetch } from "../../hooks/useFetch"


export const getHeroesByName = async (name = '') => {
	
	const heroes = await getHeroesFetch();

	name = name.toLowerCase().trim();

	if(name.length === 0) return [];

	return heroes.filter(heroe => heroe.name.toLowerCase().includes(name))

}