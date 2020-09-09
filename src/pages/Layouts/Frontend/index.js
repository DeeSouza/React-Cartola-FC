import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { WrapperLayout, MainWrapper, HeaderMenu, OpenMenu } from './styles';

import { logoutRequest } from '../../../store/modules/auth/actions';

import Menu from '../../../components/Menu';

import logo from '../../../assets/images/logo-react-cartola.svg';

export default function FrontendLayout({ children, routeName }) {
	const dispatch = useDispatch();
	const [open, setOpen] = useState(false);

	function toggleMenu() {
		setOpen(!open);
	}

	function handleLogout() {
		dispatch(logoutRequest());
	}

	return (
		<WrapperLayout>
			<HeaderMenu>
				<OpenMenu onClick={toggleMenu}>
					<span />
				</OpenMenu>

				<strong>{routeName}</strong>

				<Link to="/dashboard">
					<img src={logo} alt="Reacartola FC" />
				</Link>
			</HeaderMenu>

			<Menu
				open={open}
				toggleMenu={toggleMenu}
				handleLogout={handleLogout}
			/>

			<MainWrapper>{children}</MainWrapper>
		</WrapperLayout>
	);
}

FrontendLayout.propTypes = {
	children: PropTypes.element.isRequired,
	routeName: PropTypes.string.isRequired,
};
