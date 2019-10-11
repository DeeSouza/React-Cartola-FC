import styled from 'styled-components';
import settings from '../../../styles/variables';

export const WrapperLayout = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	min-height: 100%;
	background: linear-gradient(
		-45deg,
		${settings.linearGradientPrimary} 25%,
		${settings.linearGradiendSecondary} 45%
	);
`;

export const MainWrapper = styled.main`
	width: 90%;
	max-width: 315px;
	text-align: center;
`;
