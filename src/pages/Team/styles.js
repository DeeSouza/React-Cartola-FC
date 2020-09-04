import styled from 'styled-components';

export const Container = styled.div`
	padding: 30px 0px;
	display: flex;
	justify-content: center;
	align-content: left;
	flex-direction: column;
`;

export const Time = styled.div`
	text-align: left;
	display: flex;
	flex-direction: row;
	align-items: center;

	img {
		width: 50px;
		height: 50px;
		box-shadow: #908d8d 0px 0px 10px -3px;
		border-radius: 100%;
	}

	.info {
		h3 {
			color: #04b3a4;
			font-weight: 500;
		}

		h4 {
			color: #333;
			font-weight: 300;
		}
	}
`;

export const Patrimony = styled.div`
	justify-self: right;
	margin-left: auto;
	font-weight: 500;
	color: #ff7400;
	font-size: 15px;

	strong {
		font-size: 13px;
		font-weight: 500;
		color: #333;
	}
`;

export const Players = styled.ul`
	display: flex;
	flex-direction: column;
`;

export const Player = styled.li`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	flex-direction: row;
	padding: 15px 0px;
	border-bottom: 1px solid #f7f7f7;

	&:first-child {
		padding-top: 0px;
	}

	&:last-child {
		border-bottom: 0px;
		padding-bottom: 0px;
	}
`;
