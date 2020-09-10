import React from 'react';
import { useSelector } from 'react-redux';

import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';

import { FaUsers, FaSignOutAlt, FaTrophy, FaTimes } from 'react-icons/fa';
import {
	MdKeyboardBackspace,
	MdKeyboardArrowRight,
	MdDashboard,
} from 'react-icons/md';

import { Container, CloseMenu, ProfileInfo } from './styles';

export default function Menu({ open, toggleMenu, handleLogout }) {
	const user = useSelector(state => state.auth.team);

	return (
		<Container open={open}>
			<ProfileInfo>
				<button type="button" onClick={toggleMenu}>
					<MdKeyboardBackspace />
				</button>

				<div className="wrapper-user">
					<div className="image-user">
						<img src={user.flag} alt={user.name} />
					</div>
					<strong>{user.name}</strong>
					<small>{user.coach}</small>
				</div>
			</ProfileInfo>

			<ul>
				<li>
					<NavLink
						to="/dashboard"
						onClick={toggleMenu}
						activeClassName="selected"
					>
						<span>
							<MdDashboard />
						</span>
						<div>Dashboard</div>
						<MdKeyboardArrowRight />
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/escalation"
						onClick={toggleMenu}
						activeClassName="selected"
					>
						<span>
							<FaUsers />
						</span>
						<div>Escalação</div>
						<MdKeyboardArrowRight />
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/leagues"
						onClick={toggleMenu}
						activeClassName="selected"
					>
						<span>
							<FaTrophy />
						</span>
						<div>Ligas</div>
						<MdKeyboardArrowRight />
					</NavLink>
				</li>
				<li>
					<Link to="/" onClick={handleLogout}>
						<span>
							<FaSignOutAlt />
						</span>
						<div>Sair</div>
						<MdKeyboardArrowRight />
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
