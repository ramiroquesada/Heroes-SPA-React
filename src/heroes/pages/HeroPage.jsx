import { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { DataContext } from '../context/DataContext';
import { getHeroeById } from '../helpers';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import spinner from '../public/Spinner.svg';

export const HeroPage = () => {
	const { id } = useParams();

	const data = useContext(DataContext);

	const [hero, setHero] = useState(null);

	const navigate = useNavigate();

	const onNavigateBack = () => {
		navigate(-1);
	};

	useEffect(() => {
		const newHeroes = data ? getHeroeById(data, id) : [];
		setHero(newHeroes);
	}, [id]);

	if (!hero) {
		return null;
	}

	return (
		<>
			<div className="row mt-4 mb-2 gx-4">
				<div className="col col-sm-6 col-md-5 col-lg-4 d-flex">
					<button
						onClick={onNavigateBack}
						className="btn btn-secondary rounded-5 text-white fw-semibold mt-2">
						Go Back
					</button>
				</div>
				<div className="col col-sm-6 col-md-7 col-lg-8 d-flex"></div>
			</div>
			<div className="row mb-3 mt-3 ">
				<div className="col-sm-12 col-md-5 col-lg-4 d-flex flex-column align-items-center mb-4 animate__animated animate__fadeInLeft">
					<LazyLoadImage
						className="img-thumbnail border-info border-3 "
						style={{ minHeight: '320px', marginTop: '2rem' }}
						placeholderSrc={spinner}
						effect="blur"
						src={hero.images.sm}
						alt={hero.name}
					/>
				</div>

				<div className=" px-3 px-md-4 px-md-5 col-sm-12 col-md-7 col-lg-8 animate__animated animate__fadeInRight d-flex flex-column justify-content-center">
					<div className="d-flex justify-content-around align-items-center">
						<h2 className="animate__animated animate__slideInDown fw-bold m-0">
							{hero.name}
						</h2>
						<span>
							Combat Score: &nbsp;
							<b className="fs-4">{hero.powerstats.combat}</b>
						</span>
					</div>
					<hr className="border-2 border-info" />
					<ul className="list-group list-group-flush">
						{hero.biography.publisher == '' ? (
							''
						) : (
							<li className="list-group-item">
								Publisher: &nbsp;
								{<b>{hero.biography.publisher}</b>}
							</li>
						)}

						{hero.biography.firstAppearance == '-' ? (
							''
						) : (
							<li className="list-group-item">
								First Appearence: &nbsp;
								{<b>{hero.biography.firstAppearance}</b>}
							</li>
						)}
						<br />

						{hero.biography.fullName == '' ? (
							''
						) : (
							<li className="list-group-item">
								Full Name: &nbsp;
								<b>{hero.biography.fullName}</b>
							</li>
						)}

						{hero.biography.alignment == '-' ? (
							''
						) : (
							<li className="list-group-item">
								Alignment: &nbsp;
								<b>{hero.biography.alignment.toUpperCase()}</b>
							</li>
						)}

						{hero.biography.alterEgos == 'No alter egos found.' ? (
							''
						) : (
							<li className="list-group-item">
								Alter Egos: &nbsp;
								<b>{hero.biography.alterEgos}</b>
							</li>
						)}
						{hero.biography.aliases == '-' ? (
							''
						) : (
							<li className="list-group-item">
								Aliases: &nbsp;
								<b>{hero.biography.aliases.join(', ')}</b>
							</li>
						)}
						<br />

						{hero.appearance.race == null &&
						hero.appearance.gender == '-' ? (
							''
						) : (
							<li className="list-group-item">
								{hero.appearance.race == null ? (
									''
								) : (
									<span>
										Race: &nbsp;
										<b>{hero.appearance.race}</b>
										&nbsp;&nbsp;&nbsp;
									</span>
								)}

								{hero.appearance.gender == '-' ? (
									''
								) : (
									<span>
										Gender: &nbsp;
										<b>{hero.appearance.gender}</b>
									</span>
								)}
							</li>
						)}

						{hero.appearance.height[0] == '-' &&
						hero.appearance.weight[0] == '- lb' ? (
							''
						) : (
							<li className="list-group-item">
								{hero.appearance.height[0] == '-' ? (
									''
								) : (
									<span>
										Height: &nbsp;
										<b>{hero.appearance.height[1]}</b>
									</span>
								)}
								&nbsp;&nbsp;&nbsp;
								{hero.appearance.weight[0] == '- lb' ? (
									''
								) : (
									<span>
										Weight: &nbsp;
										<b>{hero.appearance.weight[1]}</b>
									</span>
								)}
							</li>
						)}

						<br />
					</ul>
				</div>
			</div>
		</>
	);
};
