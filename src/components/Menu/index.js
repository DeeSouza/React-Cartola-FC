import React from 'react';
import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';

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
					<NavLink
						to="/dashboard"
						onClick={toggleMenu}
						activeClassName="selected"
					>
						<span>
							<FaShoppingBasket size={20} color="#FFFFFF" />
						</span>
						<div>Mercado</div>
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/team"
						onClick={toggleMenu}
						activeClassName="selected"
					>
						<span>
							<FaUsers size={20} color="#FFFFFF" />
						</span>
						<div>Time</div>
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/leagues"
						onClick={toggleMenu}
						activeClassName="selected"
					>
						<span>
							<FaTrophy size={20} color="#FFFFFF" />
						</span>
						<div>Ligas</div>
					</NavLink>
				</li>
				<li>
					<Link to="/" onClick={handleLogout}>
						<span>
							<FaSignOutAlt size={20} color="#FFFFFF" />
						</span>
						<div>Sair</div>
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
