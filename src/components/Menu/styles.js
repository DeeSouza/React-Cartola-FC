import styled from 'styled-components';
import settings from '../../styles/variables';

export const Container = styled.nav`
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
		margin: 10px auto;
		padding: 20px 20px;
		transition: all 0.25s ease-out;

		&:hover{
			background-color: #329c94;
			border-radius: 8px;
		}

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
