// import { heroes } from "../data/heroes";

import { getHeroesFetch } from "../../hooks/useFetch"


export const getHeroesByPublisher = async ( publisher ) =>{
	const  heroes =  await getHeroesFetch();

	const validPublishers = ['DC Comics', 'Marvel Comics'];

	if ( !validPublishers.includes( publisher ) ){
		throw new Error(`${publisher} no es un publisher valido`)
	}

	return  heroes.filter(heroe => heroe.biography.publisher === publisher)

}