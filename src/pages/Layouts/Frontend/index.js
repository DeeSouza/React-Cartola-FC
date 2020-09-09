import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { MdMenu, MdArrowBack } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { WrapperLayout, MainWrapper, HeaderMenu } from './styles';

import { logoutRequest } from '../../../store/modules/auth/actions';

import Menu from '../../../components/Menu';

import logo from '../../../assets/images/logo-react-cartola.svg';

export default function FrontendLayout({ children, routeName }) {
	const dispatch = useDispatch();
	const history = useHistory();

	console.log(history);

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
				{history.location.pathname === '/dashboard' ? (
					<MdMenu size={30} color="#FFFFFF" onClick={toggleMenu} />
				) : (
					<MdArrowBack
						size={30}
						color="#FFFFFF"
						onClick={history.goBack}
					/>
				)}

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
