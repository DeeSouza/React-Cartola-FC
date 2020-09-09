import styled from 'styled-components';
import settings from '../../styles/variables';

export const Container = styled.nav`
	position: fixed;
	z-index: 3;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: #ffffff;
	display: flex;
	justify-content: left;
	align-items: center;
	padding: 60px 20px 20px 20px;
	transform: ${props =>
		props.open ? 'translateX(0%)' : 'translateX(-100%)'};
	transition: all 0.25s ease-out;

	ul {
		width: 100%;
		display: flex;
		justify-content: left;
		align-items: center;
		flex-direction: column;
		height: 100%;

		li {
			margin-bottom: 10px;
			width: 100%;

			&:last-child {
				margin-top: auto;
				margin-bottom: 0px;
				align-self: flex-end;
			}

			a {
				color: #5a5a5a;
				font-family: ${settings.fontRoboto};
				font-weight: 400;
				display: flex;
				flex-direction: row;
				align-items: center;
				padding: 10px 20px;
				transition: all 0.25s ease-out;
				border-radius: 5px;

				&.selected {
					background-color: #f7f7f7;
				}

				span {
					background-color: ${settings.linearGradientPrimary};
					display: inline-flex;
					justify-content: center;
					align-items: center;
					width: 35px;
					height: 35px;
					border-radius: 5px;
					margin-right: 10px;
				}

				div {
					font-size: 18px;
				}
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
