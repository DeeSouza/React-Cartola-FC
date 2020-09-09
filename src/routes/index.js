import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import Escalation from '../pages/Escalation';
import Leagues from '../pages/Leagues';
import InfoLeague from '../pages/InfoLeague';

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
				path="/escalation"
				isPrivate
				component={Escalation}
				routeName="Escalação"
			/>
			<Route
				path="/leagues"
				isPrivate
				component={Leagues}
				routeName="Ligas"
			/>
			<Route
				path="/league"
				isPrivate
				component={InfoLeague}
				routeName="Liga"
			/>
		</Switch>
	);
}
