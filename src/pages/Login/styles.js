import styled from 'styled-components';
import { motion } from 'framer-motion';

import settings from '../../styles/variables';

export const WrapperLogin = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
	justify-content: center;
	align-items: center;

	h4{
		font-weight: bold;
		font-size: 15px;
		color: #008277;
		margin-top: 15px;
		letter-spacing: 5px;
		opacity: 0;
		transform: translateY(10px);
		animation: showUpDown 0.85s forwards linear 2.5s;

		span{
			color: #FFF;
		}
	}

	form {
		width: 90%;
		max-width: 300px;
		margin-top: 20px;

		span{
			text-align: left;
			display: block;
			font-weight: 400;
			font-family: Roboto;
			color: white;
			margin-bottom: 10px;
		}

		input {
			width: 100%;
			border: none;
			height: 45px;
			border-radius: 4px;
			padding: 0px 10px;
			font-family: ${settings.fontRoboto};
			margin-bottom: 10px;
			font-weight: 500;
			background-color: rgba(0, 0, 0, 0.15);
			border-left: 0px solid transparent;
			color: #FFF;
			animation: showUpDown 0.85s forwards linear;
			transform: translateY(-10px);
			transition: all 0.25s ease-out;

			&:focus{
				border-left: 10px solid ${settings.colorSecondary};
			}

			::placeholder {
				font-family: "${settings.fontRoboto}";
				color: #FFF;
				font-weight: 200;
			}
		}
	}

	@keyframes showUpDown {
		from{
			opacity: 0;
			transform: translateY(-10px);
		}
		to{
			opacity: 1;
			transform: translateY(0px);
		}
	}
`;

export const ImageLogin = styled(motion.img).attrs({
	animate: {
		opacity: [0, 1],
		y: [0, -20, -20, -10, 0],
		scale: [1, 1.05, 1.05, 1, 1],
		rotate: [0, 0, 270, 270, 0],
		borderRadius: ['20%', '20%', '50%', '50%', '20%'],
	},
	transition: {
		duration: 1.5,
		delay: 1,
	},
})`
	width: 64px;
	height: 64px;
`;

export const SubmitLogin = styled.button`
	width: 60%;
	border: none;
	height: 45px;
	margin-top: 15px;
	background-color: #FFF;
	box-shadow: rgba(0, 0, 0, 0.41) 0px 10px 6px -7px;
	border-radius: 4px;
	color: #3e3e3e;
    font-size: 17px;
    font-weight: 700;
    font-family: "${settings.fontRoboto}";
	transition: all 0.25s ease-out;
	margin-bottom: 10px;
	animation: showDownUp 0.85s forwards linear;

	&:hover, &:focus{
		color: #000;
		background-color: ${settings.colorSecondary};
		box-shadow: rgba(0, 0, 0, 0.40) 0px 10px 20px -7px;
	}

	svg{
		animation: loading 1s linear infinite;
	}

	@keyframes loading {
		from{
			transform: rotate(0deg);
		}
		to{
			transform: rotate(360deg);
		}
	}

	@keyframes showDownUp {
		from{
			opacity: 0;
			transform: translateY(10px);
		}
		to{
			opacity: 1;
			transform: translateY(0px);
		}
	}
`;
