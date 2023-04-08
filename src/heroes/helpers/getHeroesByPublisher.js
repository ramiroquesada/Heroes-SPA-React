export const getHeroesByPublisher = (publisher, heroes) => {
	return heroes.filter((heroe) => heroe.biography.publisher === publisher);
};
