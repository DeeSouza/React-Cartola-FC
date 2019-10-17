import styled from 'styled-components';

export const Container = styled.div`
	padding: 30px 0px;
	display: flex;
	justify-content: center;
	align-content: left;
	flex-direction: column;

	div {
		h3 {
			text-align: left;
			color: #444;
			font-size: 13px;
		}
	}
`;

export const StatusMarket = styled.div`
	display: flex;
	justify-content: left;
	align-items: center;
	margin-top: 20px;

	svg {
		fill: ${props => (props.status === 1 ? '#00b3a5' : '#fd3829')};
	}

	div {
		margin-left: 10px;
		font-weight: 500;
		color: ${props => (props.status === 1 ? '#00b3a5' : '#fd3829')};
	}
`;

export const CurrentRound = styled.div`
	display: flex;
	justify-content: center;
	align-items: flex-start;
	margin-top: 20px;
	font-size: 24px;
	flex-direction: column;

	small {
		font-size: 15px;
		margin-right: 10px;
		color: #333;
	}
`;
