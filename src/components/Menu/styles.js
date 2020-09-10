import styled from 'styled-components';
import settings from '../../styles/variables';

export const Container = styled.nav`
	position: fixed;
	z-index: 3;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: #00b3a5;
	display: flex;
	flex-direction: column;
	justify-content: left;
	align-items: center;
	padding: 0px;
	transform: ${props =>
		props.open ? 'translateX(0%)' : 'translateX(-100%)'};
	transition: all 0.25s ease-out;

	ul {
		width: 100%;
		display: flex;
		justify-content: left;
		align-items: center;
		flex-direction: column;
		background-color: #ffffff;
		border-top-right-radius: 35px;
		border-top-left-radius: 35px;
		padding: 30px 0px;
		flex: 1;

		li {
			margin-bottom: 10px;
			width: 100%;

			&:last-child {
				margin-top: auto;
				margin-bottom: 0px;
				align-self: flex-end;
			}

			&:first-child {
				a {
					border-top-right-radius: 35px;
					border-top-left-radius: 35px;
				}
			}

			a {
				color: #5a5a5a;
				font-family: ${settings.fontRoboto};
				font-weight: 400;
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				align-items: center;
				transition: all 0.25s ease-out;
				border-radius: 5px;
				padding: 5px 35px;

				span {
					background-color: ${settings.linearGradientSecondary};
					display: inline-flex;
					justify-content: center;
					align-items: center;
					width: 35px;
					height: 35px;
					border-radius: 5px;
					margin-right: 20px;

					svg {
						font-size: 20px;
						fill: #ffffff;
					}
				}

				div {
					font-size: 16px;
					font-weight: 500;
					margin-right: auto;
				}

				svg {
					fill: #c1c1c1;
					font-size: 25px;
				}
			}
		}
	}
`;

export const ProfileInfo = styled.div`
	height: 300px;
	background-color: #00b3a5;
	width: 100%;

	button {
		background: none;
		border: none;
		padding: 30px 40px 10px;

		svg {
			fill: #ffffff;
			font-size: 25px;
		}
	}

	.wrapper-user {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;

		.image-user {
			width: 80px;
			height: 80px;
			border-radius: 50%;
			background-color: #ffffff;
			display: flex;
			align-items: center;
			justify-content: center;

			> img {
				height: 80%;
			}
		}

		strong {
			display: block;
			margin-top: 10px;
			color: #fff;
			font-size: 18px;
		}

		small {
			display: block;
			margin-top: 5px;
			color: #000;
			font-size: 13px;
			background-color: #ffca4f;
			border-radius: 12px;
			padding: 4px 12px;
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
