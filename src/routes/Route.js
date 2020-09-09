import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import AuthLayout from '../pages/Layouts/Auth';
import FrontendLayout from '../pages/Layouts/Frontend';

import { store } from '../store';

export default function RouteWrapper({
	component: Component,
	isPrivate,
	routeName,
	...rest
}) {
	const { signed } = store.getState().auth;

	if (!signed && isPrivate) {
		return <Redirect to="/" />;
	}

	if (signed && !isPrivate) {
		return <Redirect to="/dashboard" />;
	}

	const Layout = signed ? FrontendLayout : AuthLayout;

	return (
		<Route
			{...rest}
			render={props => (
				<Layout routeName={routeName}>
					<Component {...props} />
				</Layout>
			)}
		/>
	);
}

RouteWrapper.propTypes = {
	isPrivate: PropTypes.bool,
	routeName: PropTypes.string,
	component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
		.isRequired,
};

RouteWrapper.defaultProps = {
	isPrivate: false,
	routeName: null,
};
