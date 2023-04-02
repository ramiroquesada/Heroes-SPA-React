import { Link } from "react-router-dom"


export const HeroCard = ({
	id,
	superhero,
	alter_ego,
}) => {

	const heroImgUrl = `/heroes/${id}.jpg`

	return (
		<div className="col"  style={{maxWidth: '25rem'}}>
			<div className="card">
				<div className="row no-gutters">
					<div className="col-5">
						<img className="card-img" src={heroImgUrl} alt={superhero} />
					</div>
					<div className="col-7 d-flex">
						<div className="card-body d-flex flex-column justify-content-between">
							<h5 className="card-title">{superhero}</h5>
							<p className="card-text">{alter_ego}</p>
							
							<Link to={`/hero/${id}`}>
								More info...
							</Link>

						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
