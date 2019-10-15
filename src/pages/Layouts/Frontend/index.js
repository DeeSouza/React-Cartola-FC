import React from 'react';
import PropTypes from 'prop-types';
import { WrapperLayout, MainWrapper, HeaderMenu, OpenMenu } from './styles';

export default function FrontendLayout({ children }) {
	return (
		<WrapperLayout>
			<HeaderMenu>
				<OpenMenu>
					<span></span>
				</OpenMenu>
			</HeaderMenu>
			<MainWrapper>{children}</MainWrapper>
		</WrapperLayout>
	);
}

FrontendLayout.propTypes = {
	children: PropTypes.element.isRequired,
};
