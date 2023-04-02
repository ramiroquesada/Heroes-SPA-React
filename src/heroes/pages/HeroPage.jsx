import { Navigate, useParams, useNavigate } from "react-router-dom"
import { getHeroeById } from "../helpers";
import { useMemo } from "react";

export const HeroPage = () => {

	const {id} = useParams();

	const hero = useMemo(()=> getHeroeById(id), [id]);

	const navigate = useNavigate();

	const onNavigateBack = () => {
		navigate(-1)
	}

	if(!hero){
		return <Navigate to='marvel' />
	}

	return (
		<div className="row mt-5">
			<div className="col-4  animate__animated animate__fadeInLeft ">
				<img
					className="img-thumbnail border-info border-2"
					src={`https://ramessj.github.io/Heroes-SPA-React/assets/${id}.jpg`}
					alt={hero.superhero}
				/>	
			</div>

			<div className="col-8 animate__animated animate__fadeInRight" >
				<h2 className="animate__animated animate__slideInDown fw-bold">{hero.superhero}</h2>
				<hr className="border-2 border-info"/>
				<ul className="list-group list-group-flush">
					<li className="list-group-item"> Alter ego: &nbsp; <b>{hero.alter_ego}</b>	</li>
					<li className="list-group-item"> Publisher: &nbsp; <b>{hero.publisher}</b>	</li>
					<li className="list-group-item"> First Appearence: &nbsp; <b>{hero.first_appearance}</b>	</li>
				</ul>

				<h5 className="mt-3 mb-3">Characters:</h5>
				<p>{hero.characters}</p>

				<button
				onClick={onNavigateBack}
				className="btn btn-outline-info rounded-5 text-black fw-semibold">Go Back</button>

			</div>			
		</div>
	)
}
