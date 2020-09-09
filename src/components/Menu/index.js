import React from 'react';
import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';

import { FaUsers, FaSignOutAlt, FaTrophy, FaTimes } from 'react-icons/fa';

import { MdDashboard } from 'react-icons/md';

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
							<MdDashboard size={20} color="#FFFFFF" />
						</span>
						<div>DASHBOARD</div>
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/escalation"
						onClick={toggleMenu}
						activeClassName="selected"
					>
						<span>
							<FaUsers size={20} color="#FFFFFF" />
						</span>
						<div>ESCALAÇÃO</div>
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
						<div>LIGAS</div>
					</NavLink>
				</li>
				<li>
					<Link to="/" onClick={handleLogout}>
						<span>
							<FaSignOutAlt size={20} color="#FFFFFF" />
						</span>
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
