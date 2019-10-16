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
	max-width: 315px;
	text-align: center;
	padding-top: 50px;
`;

export const HeaderMenu = styled.div`
	position: fixed;
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

export const Menu = styled.nav`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: ${settings.linearGradientPrimary};
	display: flex;
	justify-content: left;
	align-items: center;
	padding-left: 70px;
	transform: ${props => (props.open ? 'translateX(0%)' : 'translateX(-100%)')};
	transition: all 0.25s ease-out;

	&:after{
		content: "";
		height: 120%;
		background-color: #FFF;
		top: 0;
		bottom: 0;
		right: 0;
		margin: auto;
		position: absolute;
		width: 100px;
		border-top-left-radius: 50%;
    	border-bottom-left-radius: 50%;
	}

	li {
		margin: 40px auto;

		a {
			color: #fff;
			font-family: "${settings.fontRoboto}";
			font-weight: 400;
			display: flex;
			flex-direction: row;
			align-items: center;

			svg {
				margin-right: 10px;
			}

			div {
				font-size: 16px;
			}
		}
	}
`;

export const CloseMenu = styled.div`
	content: '';
	position: absolute;
	top: 20px;
	right: 20px;
	z-index: 1;
`;
