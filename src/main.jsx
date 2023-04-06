import React from 'react';
import ReactDOM from 'react-dom/client';
// import { BrowserRouter } from 'react-router-dom'

import { HeroesApp } from './HeroesApp';
import { HashRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
	// <BrowserRouter >
	<HashRouter>
		<HeroesApp />
	</HashRouter>
	// </BrowserRouter>,
);
