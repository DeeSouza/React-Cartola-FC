import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import {
	FaShoppingBasket,
	FaUsers,
	FaSignOutAlt,
	FaTrophy,
	FaTimes,
} from 'react-icons/fa';

import { Container, CloseMenu } from './styles';

export default function Menu({ open, toggleMenu, handleLogout }) {
	return (
		<Container open={open}>
			<ul>
				<li>
					<Link to="/" onClick={toggleMenu}>
						<FaShoppingBasket size={15} color="#FFF" />
						<div>MERCADO</div>
					</Link>
				</li>
				<li>
					<Link to="/team" onClick={toggleMenu}>
						<FaUsers size={15} color="#FFF" />
						<div>TIME</div>
					</Link>
				</li>
				<li>
					<Link to="/" onClick={toggleMenu}>
						<FaTrophy size={15} color="#FFF" />
						<div>LIGAS</div>
					</Link>
				</li>
				<li>
					<Link to="/" onClick={handleLogout}>
						<FaSignOutAlt size={15} color="#FFF" />
						<div>SAIR</div>
					</Link>
				</li>
			</ul>

			<CloseMenu onClick={toggleMenu}>
				<FaTimes size={25} color="#00b3a5" />
			</CloseMenu>
		</Container>
	);
}

Menu.propTypes = {
	open: PropTypes.bool.isRequired,
	toggleMenu: PropTypes.func.isRequired,
	handleLogout: PropTypes.func.isRequired,
};
