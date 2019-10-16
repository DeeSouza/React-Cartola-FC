import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { WrapperLayout, MainWrapper, HeaderMenu, OpenMenu } from './styles';

import Menu from '../../../components/Menu';

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

			<Menu open={open} toggleMenu={toggleMenu} />

			<MainWrapper>{children}</MainWrapper>
		</WrapperLayout>
	);
}

FrontendLayout.propTypes = {
	children: PropTypes.element.isRequired,
};
