import React, { useState } from 'react';
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

	function openMenu() {
		setOpen(!open);
	}

	function closeMenu() {
		setOpen(!open);
	}

	return (
		<WrapperLayout>
			<HeaderMenu>
				<OpenMenu onClick={openMenu}>
					<span />
				</OpenMenu>
			</HeaderMenu>

			<Menu open={open}>
				<ul>
					<li>
						<a href="#">
							<FaShoppingBasket size={15} color="#FFF" />
							<div>MERCADO</div>
						</a>
					</li>
					<li>
						<a href="#">
							<FaUsers size={15} color="#FFF" />
							<div>TIME</div>
						</a>
					</li>
					<li>
						<a href="#">
							<FaTrophy size={15} color="#FFF" />
							<div>LIGAS</div>
						</a>
					</li>
					<li>
						<a href="#">
							<FaSignOutAlt size={15} color="#FFF" />
							<div>SAIR</div>
						</a>
					</li>
				</ul>

				<CloseMenu onClick={closeMenu}>
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
