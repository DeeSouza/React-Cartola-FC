import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import Skeleton from 'react-loading-skeleton';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

import Card from '../../components/Card';

import cartolaAPI from '../../services/cartola';
import { Container, StatusMarket, CurrentRound } from './styles';

export default function Dashboard() {
	const [market, setMarket] = useState([]);

	useEffect(() => {
		async function loadStatusMercado() {
			try {
				const response = await cartolaAPI.get('mercado/status');
				setMarket(response.data);
			} catch (error) {
				toast.error(
					'😓 Não foi possível carregar os dados, tente novamente!',
					{
						position: 'top-right',
						autoClose: 5000,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
					}
				);
			}
		}

		loadStatusMercado();
	}, []);

	return (
		<Container>
			<Card>
				<h3>STATUS DO MERCADO</h3>

				{market.status_mercado ? (
					<StatusMarket status={market.status_mercado}>
						{market.status_mercado === 1 ? (
							<div>
								<FaCheckCircle size={25} color="#00b3a5" />
								<strong>MERCADO ABERTO</strong>
							</div>
						) : (
							<div>
								<FaTimesCircle size={25} color="#fd3829" />
								<strong>MERCADO FECHADO</strong>
							</div>
						)}
					</StatusMarket>
				) : (
					<Skeleton />
				)}
			</Card>

			<Card>
				<h3>FECHAMENTO</h3>

				{market.fechamento ? (
					<CurrentRound>
						{market.fechamento ? (
							<div>
								<small>
									{market.fechamento.dia}/
									{market.fechamento.mes}
								</small>
								<strong>
									{market.fechamento.hora}h
									{market.fechamento.minuto > 0 &&
										`${market.fechamento.minuto}min`}
								</strong>
							</div>
						) : (
							<div>FECHADO</div>
						)}
					</CurrentRound>
				) : (
					<Skeleton />
				)}
			</Card>

			<Card>
				<h3>RODADA ATUAL DO CAMPEONATO</h3>

				{market.rodada_atual ? (
					<CurrentRound>{market.rodada_atual}</CurrentRound>
				) : (
					<Skeleton />
				)}
			</Card>
		</Container>
	);
}
