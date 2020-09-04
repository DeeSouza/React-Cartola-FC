import React from 'react';
import PropTypes from 'prop-types';
import CurrencyFormat from 'react-currency-format';

import { Container } from './styles';

export default function Player({ player }) {
	return (
		<Container>
			<div className="avatar-player">
				<div>
					<img src={player.foto} alt={player.apelido} />
				</div>

				{player.capitao && <strong className="cap">C</strong>}
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
						renderText={value => <h4>{value}</h4>}
					/>
				</div>

				{player.escudo_time && (
					<img
						alt={player.escudo_time.nome}
						src={player.escudo_time.escudos['30x30']}
					/>
				)}
			</div>
		</Container>
	);
}

Player.propTypes = {
	player: PropTypes.shape({
		foto: PropTypes.string,
		capitao: PropTypes.bool,
		posicao: PropTypes.string,
		apelido: PropTypes.string,
		preco_num: PropTypes.number,
		escudo_time: PropTypes.shape({
			nome: PropTypes.string,
			escudos: PropTypes.shape({
				'30x30': PropTypes.string,
			}),
		}),
	}).isRequired,
};
