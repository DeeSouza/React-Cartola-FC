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
	justify-content: flex-start;
	align-items: center;
	width: 100%;
	top: 0;
	left: 0;
	height: 50px;
	background: linear-gradient(
		90deg,
		${settings.linearGradientPrimary},
		${settings.linearGradiendSecondary}
	);
	box-shadow: #565656 0px 0px 6px 0px;
`;

export const OpenMenu = styled.button`
	display: block;
	width: 25px;
	height: 35px;
	background-color: transparent;
	border: none;
	display: flex;
	justify-content: center;
	margin-left: 15px;
	position: relative;

	span {
		display: block;
		height: 2px;
		width: 100%;
		background-color: #fff;
		margin: auto;
	}

	&:before,
	&:after {
		content: '';
		position: absolute;
		height: 2px;
		background-color: #fff;
		width: 80%;
		left: 0;
	}

	&:before {
		top: 10px;
	}

	&:after {
		top: 22px;
	}
`;
