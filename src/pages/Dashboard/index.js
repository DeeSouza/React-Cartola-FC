import React, { useState, useEffect } from 'react';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import { Container, StatusMarket, CurrentRound } from './styles';
import cartolaAPI from '../../services/cartola';

import Card from '../../components/Card';

export default function Dashboard() {
	const [market, setMarket] = useState([]);

	useEffect(() => {
		async function loadStatusMercado() {
			const response = await cartolaAPI.get('mercado/status');
			setMarket(response.data);
		}

		loadStatusMercado();
	}, []);

	return (
		<Container>
			<Card>
				<h3>STATUS DO MERCADO</h3>

				{market && market.status_mercado ? (
					<StatusMarket status={market.status_mercado}>
						<FaCheckCircle size={30} color="#00b3a5" />
						<div>MERCADO ABERTO</div>
					</StatusMarket>
				) : (
					<StatusMarket status={market.status_mercado}>
						<FaTimesCircle size={30} color="#fd3829" />
						<div>MERCADO FECHADO</div>
					</StatusMarket>
				)}
			</Card>

			<Card>
				<h3>RODATA ATUAL DO CAMPEONATO</h3>

				{market && market.rodada_atual ? (
					<CurrentRound>{market.rodada_atual}</CurrentRound>
				) : (
					'0 Rodada'
				)}
			</Card>
		</Container>
	);
}
