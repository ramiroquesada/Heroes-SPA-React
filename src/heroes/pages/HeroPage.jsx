import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getHeroeById } from '../helpers';

export const HeroPage = () => {
	const { id } = useParams();

	const [hero, setHero] = useState(null);

	const navigate = useNavigate();

	const onNavigateBack = () => {
		navigate(-1);
	};

	const getHeroeByIdPromise = (id) => {
		return new Promise((resolve, reject) => {
			const hero = getHeroeById(id);
			if (hero) {
				resolve(hero);
			} else {
				reject(new Error(`No se pudo obtener el héroe con ID ${id}`));
			}
		});
	};

	const fetchResult = async () => {
		try {
			const result = await getHeroeByIdPromise(id);
			setHero(result);
		} catch (error) {
			throw new Error(error);
		}
	};

	useEffect(() => {
		fetchResult();
	}, []);

	if (!hero) {
		return null;
	}

	return (
		<>
			<button
				onClick={onNavigateBack}
				className="btn btn-outline-info rounded-5 text-black fw-semibold mt-3">
				Go Back
			</button>
			<div className="row mt-4 mb-4">
				<div className="col-sm-12 col-md-5 col-lg-4  animate__animated animate__fadeInLeft justify-content-center d-flex  align-content-center mb-3">
					<img
						className="img-thumbnail border-info border-2 "
						src={hero.images.md}
						alt={hero.name}
					/>
				</div>

				<div className="col-sm-12 col-md-7 col-lg-8 animate__animated animate__fadeInRight">
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
						<li className="list-group-item">
							Publisher: &nbsp;<b>{hero.biography.publisher}</b>
						</li>
						{hero.biography.firstAppearance == '-' ? (
							''
						) : (
							<li className="list-group-item">
								First Appearence: &nbsp;
								{<b>{hero.biography.firstAppearance}</b>}
							</li>
						)}
						<br />
						<li className="list-group-item">
							Full Name: &nbsp;
							<b>
								{hero.biography.fullName == '' ? (
									<b>Unknown :/</b>
								) : (
									hero.biography.fullName
								)}
							</b>
						</li>
						<li className="list-group-item">
							Alignment: &nbsp;
							<b>
								{hero.biography.alignment == '-' ? (
									<b>Unknown :/</b>
								) : (
									hero.biography.alignment.toUpperCase()
								)}
							</b>
						</li>
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
