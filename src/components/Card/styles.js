import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	background-color: #fff;
	border-radius: 5px;
	padding: ${props => (props.nopadding ? '0px' : '20px')};
	box-shadow: #cecdcd 2px 2px 3px -1px;
	flex-direction: column;
	margin-bottom: 20px;

	.skeleton {
		padding: 20px;

		&.circle {
			display: flex;
			flex-direction: row;
			justify-content: space-evenly;

			> span {
				&:last-child {
					flex: 2;
					margin-left: 10px;
				}
			}
		}
	}

	&:last-child {
		margin-bottom: 0px;
	}
`;

export const Loading = styled.div`
	padding: 20px;

	svg {
		animation: loading 0.5s linear infinite;
	}

	@keyframes loading {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}
`;
