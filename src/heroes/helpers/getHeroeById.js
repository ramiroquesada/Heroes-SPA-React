
export const getHeroeById = (heroes, id) => {

	return  heroes.find(heroe => heroe.id == id)

}