import React from 'react';
import { Router } from 'react-router-dom';

// Routes with components
import Routes from './routes';
import history from './services/history';

// Styles globals
import GlobalStyle from './styles/global';

function App() {
	return (
		<Router history={history}>
			<Routes />
			<GlobalStyle />
		</Router>
	);
}

export default App;
