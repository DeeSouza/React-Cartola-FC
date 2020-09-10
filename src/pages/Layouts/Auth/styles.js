import styled from 'styled-components';
import settings from '../../../styles/variables';

export const WrapperLayout = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	min-height: 100%;
	background: linear-gradient(
		360deg,
		${settings.linearGradientPrimary},
		${settings.linearGradientSecondary}
	);
`;

export const MainWrapper = styled.main`
	width: 90%;
	max-width: 315px;
	text-align: center;
`;
