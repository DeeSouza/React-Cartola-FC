import React, { useEffect, useState } from 'react';
import CurrencyFormat from 'react-currency-format';
import cartolaAPI from '../../services/cartola';

import Card from '../../components/Card';

import { Container, Time, Patrimony, Player, Players, Cap } from './styles';

export default function Team() {
	const [team, setTeam] = useState([]);
	const [infoTeam, setInfoTeam] = useState([]);
	const [players, setPlayers] = useState([]);
	const [coach, setCoach] = useState({});

	useEffect(() => {
		async function loadInfoTeam() {
			const { data } = await cartolaAPI.get('auth/time');

			setInfoTeam(data);
			setTeam(data.time);

			const newPlayers = data.atletas
				.filter(player => player.posicao_id !== 6)
				.map(player => {
					return {
						...player,
						foto: player.foto
							? player.foto.replace('FORMATO', '140x140')
							: 'https://via.placeholder.com/140',
						escudo_time: data.clubes
							? data.clubes[player.clube_id]
							: player.clube_id,
						posicao: data.posicoes
							? data.posicoes[
									player.posicao_id
							  ].abreviacao.toUpperCase()
							: '---',
						capitao: data.capitao_id === player.atleta_id,
					};
				});

			setPlayers(newPlayers);

			const coachPlayer = data.atletas
				.filter(player => player.posicao_id === 6)
				.map(player => {
					return {
						...player,
						foto: player.foto
							? player.foto.replace('FORMATO', '140x140')
							: 'https://via.placeholder.com/140',
						escudo_time: data.clubes
							? data.clubes[player.clube_id]
							: player.clube_id,
						posicao: data.posicoes
							? data.posicoes[
									player.posicao_id
							  ].abreviacao.toUpperCase()
							: '---',
					};
				});

			setCoach(coachPlayer[0]);
		}

		loadInfoTeam();
	}, []); // eslint-disable-line

	return (
		<Container>
			<Card>
				{infoTeam.time && (
					<Time>
						<img src={team.foto_perfil} alt={team.nome_cartola} />

						<div className="info">
							<h3>{team.nome}</h3>
							<h4>{team.nome_cartola}</h4>
						</div>

						<CurrencyFormat
							value={infoTeam.valor_time}
							prefix="R$ "
							decimalScale={2}
							displayType="text"
							decimalSeparator=","
							renderText={value => (
								<Patrimony>
									<strong>Valor do Time</strong> <br />
									{value}
								</Patrimony>
							)}
						/>
					</Time>
				)}
			</Card>

			<Card>
				{infoTeam.time && (
					<Players>
						{players &&
							players.map(player => (
								<Player key={player.atleta_id}>
									<div className="avatar-player">
										<img
											src={player.foto}
											alt={player.apelido}
										/>

										{player.capitao && <Cap>C</Cap>}
									</div>

									<div className="detail">
										<h2>{player.posicao}</h2>

										<div className="detail-player">
											<h3>{player.apelido}</h3>

											<CurrencyFormat
												value={player.preco_num}
												prefix="C$"
												displayType="text"
												fixedDecimalScale
												renderText={value => (
													<h4>{value}</h4>
												)}
											/>
										</div>

										{player.escudo_time && (
											<img
												alt={player.escudo_time.nome}
												src={
													player.escudo_time.escudos[
														'30x30'
													]
												}
											/>
										)}
									</div>
								</Player>
							))}

						<Player key={coach.atleta_id}>
							<div className="avatar-player">
								<img src={coach.foto} alt={coach.apelido} />
							</div>

							<div className="detail">
								<h2>{coach.posicao}</h2>

								<div className="detail-player">
									<h3>{coach.apelido}</h3>

									<CurrencyFormat
										value={coach.preco_num}
										prefix="C$"
										fixedDecimalScale
										displayType="text"
										renderText={value => <h4>{value}</h4>}
									/>
								</div>

								{coach.escudo_time && (
									<img
										alt={coach.escudo_time.nome}
										src={coach.escudo_time.escudos['30x30']}
									/>
								)}
							</div>
						</Player>
					</Players>
				)}
			</Card>
		</Container>
	);
}
