import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { DataContext } from '../context/DataContext';

export const HomePage = () => {
	const data = useContext(DataContext);

	const [publishers, setpublishers] = useState([]);

	useEffect(() => {
		const newPublishers = !data
			? []
			: data.reduce((acc, hero) => {
					if (!acc.includes(hero.biography.publisher)) {
						let pubName = hero.biography.publisher;
						if (pubName == '' || !pubName) {
							pubName = hero.name;
						}

						// contar héroes por publisher
						const count = data.reduce((count, h) => {
							if (h.biography.publisher === pubName) {
								return count + 1;
							}
							return count;
						}, 0);

						// agregar publisher si tiene al menos 5 héroes
						if (count >= 4) {
							return [...acc, pubName];
						}
					}
					return acc;
			  }, []);

		setpublishers(newPublishers);
	}, [data]);

	return (
		<>
			<h1 className="mt-3">All Publishers</h1>
			<hr />

			<ul className="list-group">
				{publishers.map((publisher) => {
					return (
						<Link
							key={publisher}
							style={{ textDecoration: 'none' }}
							to={`/publisher/${publisher}`}>
							<li className="list-group-item fs-5 ">
								{publisher}
							</li>
						</Link>
					);
				})}
			</ul>
		</>
	);
};
