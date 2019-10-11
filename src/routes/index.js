import React from 'react';
import { Switch } from 'react-router-dom';

// Routes with component
import Route from './Route';

// Páginas Autenticação e Registros
import Login from '../pages/Login';

export default function Routes() {
	return (
		<Switch>
			<Route path="/" exact component={Login} />
		</Switch>
	);
}
