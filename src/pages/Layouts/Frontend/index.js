import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { WrapperLayout, MainWrapper, HeaderMenu, OpenMenu } from './styles';

import { logoutRequest } from '../../../store/modules/auth/actions';

import Menu from '../../../components/Menu';

export default function FrontendLayout({ children }) {
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
};
