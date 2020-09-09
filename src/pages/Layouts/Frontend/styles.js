import styled from 'styled-components';
import settings from '../../../styles/variables';

export const WrapperLayout = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	min-height: 100%;
	background: whitesmoke;
`;

export const MainWrapper = styled.main`
	width: 90%;
	max-width: 90%;
	text-align: center;
	padding-top: 50px;
`;

export const HeaderMenu = styled.header`
	position: fixed;
	z-index: 2;
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	top: 0;
	left: 0;
	height: 50px;
	padding: 0px 15px;
	background: ${settings.linearGradientPrimary};
	box-shadow: #565656 0px 0px 6px 0px;

	strong {
		text-transform: uppercase;
		color: #fff;
		font-weight: 600;
		font-size: 16px;
	}

	> a {
		img {
			height: 35px;
		}
	}
`;
