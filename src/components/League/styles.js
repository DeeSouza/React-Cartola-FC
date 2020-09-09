import styled from 'styled-components';

export const Container = styled.li`
	border-bottom: 1px solid #f7f7f7;
	padding: 0;

	.wrapper-league {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		flex-direction: row;
		padding: 20px;
	}

	&:last-child {
		border-bottom: 0px;
	}

	.avatar-league {
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
			display: flex;
			align-items: center;
			justify-content: center;

			> img {
				height: 70%;
			}
		}
	}

	.detail {
		text-align: left;
		display: flex;
		align-items: center;
		justify-content: flex-start;
		width: 100%;
		flex: 2;

		.detail-league {
			margin-left: 15px;

			h3 {
				font-weight: 500;
				font-size: 14px;
				color: #404040;
			}

			strong {
				margin: 0;
				font-size: 13px;
				color: #757575;
				font-weight: 300;
				margin-top: 2px;
				display: block;
			}

			p {
				margin-top: 10px;
				display: block;
				font-size: 12px;
			}
		}
	}
`;
