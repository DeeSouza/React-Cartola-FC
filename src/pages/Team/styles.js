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
		margin-left: 15px;

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

	.avatar-player {
		position: relative;

		> img {
			border-radius: 100%;
			width: 50px;
			height: 50px;
			margin-right: 15px;
			background-color: ghostwhite;
			box-shadow: #908d8d 0px 0px 10px -3px;
		}
	}
	.detail {
		text-align: left;
		display: flex;
		align-items: center;
		justify-content: flex-start;
		width: 100%;

		h2 {
			font-size: 13px;
			font-weight: 300;
		}

		.detail-player {
			margin-left: 15px;

			h3 {
				font-weight: 400;
				font-size: 14px;
			}

			h4 {
				font-weight: 700;
				font-size: 13px;
				color: #ff8a00;
			}
		}

		img {
			width: 30px;
			height: 30px;
			margin-left: auto;
		}
	}
`;

export const Cap = styled.div`
	position: absolute;
	width: 25px;
	height: 25px;
	background-color: #ffa000;
	color: #fff;
	right: 10px;
	bottom: 0px;
	border-radius: 20px;
	font-weight: 800;
	justify-content: center;
	align-items: center;
	display: flex;
	font-size: 16px;
	border: 3px solid #ffa000;
`;
