import { Route, Routes, Navigate } from 'react-router-dom';
import { Navbar } from '../../ui';
import {  HeroPage,  SearchPage, HomePage, PublisherPage } from '../pages';
import { DataProvider } from '../context/DataProvider';

export const HeroesRoutes = () => {
	return (
		<>
			<Navbar />

			<DataProvider>
				<div className="container">
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path='publisher/:id' element={<PublisherPage/>} />
						<Route path="search" element={<SearchPage />} />
						<Route path="heroe/:id" element={<HeroPage />} />

						<Route path="/*" element={<Navigate to="/" />} />
					</Routes>
				</div>
			</DataProvider>
		</>
	);
};
