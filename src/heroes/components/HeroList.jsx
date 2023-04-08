import {  useState, useEffect, useContext } from "react";
import { DataContext } from "../context/DataContext";
import { getHeroesByPublisher } from "../helpers"
import { HeroCard } from "./";

export const HeroList = ({publisher}) => {

	const data = useContext(DataContext)


  const [publisherHeroes, setPublisherHeroes] = useState([]);

  useEffect(() => {
		const newHeroes = data ? getHeroesByPublisher(publisher, data) : [];
    setPublisherHeroes(newHeroes)
  }, [publisher]);


	
	return (
		<div className="row row-cols-lg-3 mb-5 row-cols-md-2 row-cols-1 g-3 animate__animated animate__fadeIn justify-content-center">
			{
				publisherHeroes.map(heroe =>  (
					<HeroCard key={heroe.id} {...heroe}/>
				))
			}			
		</div>
			
	)
}
