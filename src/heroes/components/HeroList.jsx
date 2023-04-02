import { HeroCard } from "./";
import { getHeroesByPublisher } from "../helpers"
import { useMemo } from "react";

export const HeroList = ({publisher}) => {

	const heroes = useMemo(()=> getHeroesByPublisher(publisher), [publisher]) 


	return (
		<div className="row row-cols-lg-3 mb-5 row-cols-md-2 row-cols-1 g-3 animate__animated animate__fadeIn justify-content-center">
			{
				heroes.map(heroe =>  (
					<HeroCard key={heroe.id} {...heroe}/>
				))
			}			
		</div>
			
	)
}
