import { HeroList } from '../components/HeroList';

export const MarvelPage = () => {
	return (
		<>
			<h1 className="mt-3">
				Marvel Heroes <span className="fs-4">{'(A-z)'}</span>
			</h1>
			<hr />

			<HeroList publisher="Marvel Comics" />
		</>
	);
};
