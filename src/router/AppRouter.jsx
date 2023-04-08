import { Routes, Route } from 'react-router-dom';
import { HeroesRoutes } from '../heroes';
import { LoginPage } from '../auth';
import { PrivateRoutes, PublicRoutes } from './';
import { DataProvider } from '../heroes/context/DataProvider';

export const AppRouter = () => {
	return (
		<>
			<Routes>
				<Route
					path="login"
					element={
						<PublicRoutes>
							<LoginPage />
						</PublicRoutes>
					}
				/>

				<Route
					path="/*"
					element={
						<PrivateRoutes>
							
								<HeroesRoutes />
					
						</PrivateRoutes>
					}
				/>
			</Routes>
		</>
	);
};
