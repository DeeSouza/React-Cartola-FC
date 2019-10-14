import React from 'react';
import PropTypes from 'prop-types';
import { WrapperLayout, MainWrapper } from './styles';

export default function FrontendLayout({ children }) {
	return (
		<WrapperLayout>
			<MainWrapper>{children}</MainWrapper>
		</WrapperLayout>
	);
}

FrontendLayout.propTypes = {
	children: PropTypes.element.isRequired,
};
