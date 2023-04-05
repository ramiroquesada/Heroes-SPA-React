import {  useState, useEffect } from "react";
import { HeroCard } from "./";
import { getHeroesByPublisher } from "../helpers"

export const HeroList = ({publisher}) => {


	const [heroes, setHeroes] = useState([]);

  useEffect(() => {
    async function fetchHeroes() {
      const result = await getHeroesByPublisher(publisher);
      setHeroes(result);
    }
    fetchHeroes();
  }, [publisher]);


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
