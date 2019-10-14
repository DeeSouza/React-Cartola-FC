import React from 'react';
import { Switch } from 'react-router-dom';

// Routes with component
import Route from './Route';

// Páginas Autenticação e Registros
import Login from '../pages/Login';

// Dashboard
import Dashboard from '../pages/Dashboard';

export default function Routes() {
	return (
		<Switch>
			<Route path="/" exact component={Login} />
			<Route path="/dashboard" isPrivate component={Dashboard} />
		</Switch>
	);
}
