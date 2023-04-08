
export const getHeroesByName = (heroes, name = '') => {
	

	name = name.toLowerCase().trim();

	if(name.length === 0) return [];

	return heroes.filter(heroe => heroe.name.toLowerCase().includes(name))

}