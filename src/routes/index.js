import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import Team from '../pages/Team';
import Leagues from '../pages/Leagues';

export default function Routes() {
	return (
		<Switch>
			<Route path="/" exact component={Login} />
			<Route
				path="/dashboard"
				isPrivate
				component={Dashboard}
				routeName="Dashboard"
			/>
			<Route
				path="/team"
				isPrivate
				component={Team}
				routeName="Escalação"
			/>
			<Route
				path="/leagues"
				isPrivate
				component={Leagues}
				routeName="Ligas"
			/>
		</Switch>
	);
}
