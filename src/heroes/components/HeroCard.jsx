import { Link } from 'react-router-dom';
import { LazyLoadImage  } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import spinner from '../public/Spinner.svg'

export const HeroCard = ({ id, name, images }) => {
	return (
		<div className="col" style={{ maxWidth: '10rem' }}>
			<Link to={`/heroe/${id}`} className="text-decoration-none">
				<div className="card">
					<div className="col no-gutters d-flex flex-column justify-content-center">

						<LazyLoadImage
							className="card-img"
							placeholderSrc={spinner}
							effect="blur"
							src={images.sm}
							alt={name}
							/>

						<p className="card-title fw-bolder text-nowrap d-flex justify-content-center p-2">
							{name}
						</p>
					</div>
				</div>
			</Link>
		</div>
	);
};
