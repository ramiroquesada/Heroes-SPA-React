import { useNavigate, useParams } from 'react-router-dom';
import { HeroList } from '../components/HeroList';

export const PublisherPage = () => {
	const { id } = useParams();

	const navigate = useNavigate();

	const onNavigateBack = () => {
		navigate(-1);
	};

	return (
		<>
			<button
				onClick={onNavigateBack}
				className="btn btn-secondary rounded-5 text-white fw-semibold mt-4">
				Go Back
			</button>
			<h1 className="mt-3">
				{id} <span className="fs-4">{'(A-z)'}</span>
			</h1>

			<hr />

			<HeroList publisher={id} />
		</>
	);
};
