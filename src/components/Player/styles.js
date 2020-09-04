import styled from 'styled-components';

export const Container = styled.li`
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
		border-radius: 100%;
		width: 50px;
		height: 50px;
		box-shadow: #908d8d 0px 0px 10px -3px;
		margin-right: 15px;
		background-color: ghostwhite;

		> div {
			overflow: hidden;
			width: 50px;
			height: 50px;
			border-radius: 50%;

			> img {
				height: 100%;
				margin-top: 10px;
			}
		}

		.cap {
			position: absolute;
			width: 25px;
			height: 25px;
			background-color: #ffa000;
			color: #fff;
			right: -5px;
			bottom: -5px;
			border-radius: 20px;
			font-weight: 800;
			justify-content: center;
			align-items: center;
			display: flex;
			font-size: 16px;
			border: 3px solid #ffa000;
		}
	}

	.detail {
		text-align: left;
		display: flex;
		align-items: center;
		justify-content: flex-start;
		width: 100%;
		flex: 2;

		h2 {
			font-size: 13px;
			font-weight: 400;
		}

		.detail-player {
			margin-left: 15px;

			h3 {
				font-weight: 500;
				font-size: 14px;
				color: #404040;
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
