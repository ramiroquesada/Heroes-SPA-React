
import { getHeroesFetch } from "../../hooks/useFetch"


export const getHeroeById = async(id) => {
	const heroes = await getHeroesFetch();

	return  heroes.find(heroe => heroe.id == id)

}