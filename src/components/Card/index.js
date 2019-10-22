import React from 'react';
import PropTypes from 'prop-types';
import { FaSpinner } from 'react-icons/fa';

import { Container, Loading } from './styles';

export default function Card({ children }) {
	return <Container>{children}</Container>;
}

Card.propTypes = {
	children: PropTypes.node,
};

Card.defaultProps = {
	children: (
		<Loading>
			<FaSpinner size={15} color="#ff7400" />
		</Loading>
	),
};
