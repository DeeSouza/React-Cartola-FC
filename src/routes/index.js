import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import Team from '../pages/Team';

export default function Routes() {
	return (
		<Switch>
			<Route path="/" exact component={Login} />
			<Route path="/dashboard" isPrivate component={Dashboard} />
			<Route path="/team" isPrivate component={Team} />
		</Switch>
	);
}
