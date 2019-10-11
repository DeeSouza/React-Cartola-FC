import React from 'react';
import PropTypes from 'prop-types';
import { WrapperLayout, MainWrapper } from './styles';

export default function AuthLayout({ children }) {
	return (
		<WrapperLayout>
			<MainWrapper>{children}</MainWrapper>
		</WrapperLayout>
	);
}

AuthLayout.propTypes = {
	children: PropTypes.element.isRequired,
};
