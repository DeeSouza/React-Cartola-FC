import styled from 'styled-components';
import settings from '../../../styles/variables';

export const WrapperLayout = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	min-height: 100%;
	background: #fff;
`;

export const MainWrapper = styled.main`
	width: 90%;
	max-width: 315px;
	text-align: center;
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
	background: linear-gradient(90deg, #00b3a5, #ffca4f);
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
