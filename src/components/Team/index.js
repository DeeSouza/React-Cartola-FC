import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

const Team = ({ team }) => (
	<Container>
		<div className="wrapper-team">
			<div className="avatar-team">
				<div>
					<img src={team.url_escudo_png} alt={team.nome} />
				</div>
			</div>

			<div className="detail">
				<h2>{team.ranking.campeonato}°</h2>

				<div className="detail-team">
					<h3>{team.nome}</h3>
					<strong>{team.nome_cartola}</strong>

					<p>{team.pontos.campeonato}</p>
				</div>
			</div>
		</div>
	</Container>
);

Team.propTypes = {
	team: PropTypes.shape({
		url_escudo_png: PropTypes.string.isRequired,
		nome: PropTypes.string.isRequired,
		nome_cartola: PropTypes.string.isRequired,
		ranking: PropTypes.shape({
			campeonato: PropTypes.number,
		}).isRequired,
		pontos: PropTypes.shape({
			campeonato: PropTypes.number,
		}).isRequired,
	}).isRequired,
};

export default Team;
