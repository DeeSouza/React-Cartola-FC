import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
	FaShoppingBasket,
	FaUsers,
	FaSignOutAlt,
	FaTrophy,
	FaTimes,
} from 'react-icons/fa';
import {
	WrapperLayout,
	MainWrapper,
	HeaderMenu,
	OpenMenu,
	Menu,
	CloseMenu,
} from './styles';

export default function FrontendLayout({ children }) {
	const [open, setOpen] = useState(false);

	function toggleMenu() {
		setOpen(!open);
	}

	return (
		<WrapperLayout>
			<HeaderMenu>
				<OpenMenu onClick={toggleMenu}>
					<span />
				</OpenMenu>
			</HeaderMenu>

			<Menu open={open}>
				<ul>
					<li>
						<Link to="/">
							<FaShoppingBasket size={15} color="#FFF" />
							<div>MERCADO</div>
						</Link>
					</li>
					<li>
						<Link to="/">
							<FaUsers size={15} color="#FFF" />
							<div>TIME</div>
						</Link>
					</li>
					<li>
						<Link to="/">
							<FaTrophy size={15} color="#FFF" />
							<div>LIGAS</div>
						</Link>
					</li>
					<li>
						<Link to="/">
							<FaSignOutAlt size={15} color="#FFF" />
							<div>SAIR</div>
						</Link>
					</li>
				</ul>

				<CloseMenu onClick={toggleMenu}>
					<FaTimes size={25} color="#00b3a5" />
				</CloseMenu>
			</Menu>

			<MainWrapper>{children}</MainWrapper>
		</WrapperLayout>
	);
}

FrontendLayout.propTypes = {
	children: PropTypes.element.isRequired,
};
