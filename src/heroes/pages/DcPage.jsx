import { HeroList } from '../components';

export const DcPage = () => {
	return (
		<>
			<h1 className="mt-3">
				DC Heroes <span className="fs-4">{'(A-z)'}</span>
			</h1>

			<hr />

			<HeroList publisher="DC Comics" />
		</>
	);
};
