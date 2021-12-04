import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ClientSearchProvider } from './context/clientSearchContext';
import './index.css';
import App from './App';

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<ClientSearchProvider>
				<App />
			</ClientSearchProvider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
);
