import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';

import { HeroesApp } from './HeroesApp';

ReactDOM.createRoot(document.getElementById('root')).render(
	<HashRouter basename='/Heroes-SPA-React/' >
		<HeroesApp />
	</HashRouter>
);
