import styled from 'styled-components';
import { lighten } from 'polished';
import settings from '../../styles/variables';

export const WrapperLogin = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
	justify-content: center;
	align-items: center;

	form {
		width: 90%;
		max-width: 300px;
		margin-top: 20px;

		input {
			width: 100%;
			border: none;
			height: 45px;
			border-radius: 4px;
			padding: 0px 10px;
			font-family: "${settings.fontRoboto}";
			margin-bottom: 10px;
			font-weight: 500;
			background-color: ${settings.colorPrimary};
			border-left: 0px solid transparent;
			color: ${settings.colorHoverPrimary};
			transition: all 0.25s ease-out;

			&:focus{
				border-left: 10px solid ${settings.colorHoverPrimary};
			}

			::placeholder {
				font-family: "${settings.fontRoboto}";
				color: ${settings.colorHoverPrimary};
				font-weight: 500;
			}
		}
	}
`;

export const TitleLogin = styled.h1`
	font-size: 20px;
	color: #f5f5f5;
`;

export const SubmitLogin = styled.button`
	width: 60%;
	border: none;
	height: 45px;
	margin-top: 15px;
	background-color: #f5f5f5;
	border-radius: 4px;
	color: #474548;
    font-size: 17px;
    font-weight: 700;
    font-family: "${settings.fontRoboto}";
	transition: all 0.25s ease-out;

	&:hover{
		background-color: ${lighten(1, '#f5f5f5')};
	}
`;
