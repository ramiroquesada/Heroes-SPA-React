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
		<div className="row mt-5 ">
			<div className="col-4  animate__animated animate__fadeInLeft">
				<img
					className="img-thumbnail "
					src={`/heroes/${id}.jpg`}
					alt={hero.superhero}
				/>	
			</div>

			<div className="col-8 animate__animated animate__fadeInRight" >
				<h3 className="animate__animated animate__slideInDown ">{hero.superhero}</h3>
				<ul className="list-group list-group-flush">
					<li className="list-group-item"> <b>Alter ego:</b> {hero.alter_ego}	</li>
					<li className="list-group-item"> <b>Publisher:</b> {hero.publisher}	</li>
					<li className="list-group-item"> <b>First Appearence:</b> {hero.first_appearance}	</li>
				</ul>

				<h5 className="mt-3">Characters:</h5>
				<p>{hero.characters}</p>

				<button
				onClick={onNavigateBack}
				className="btn btn-outline-primary">Go Back</button>

			</div>			
		</div>
	)
}
