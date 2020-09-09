import React from 'react';

import { Container } from './styles';

const League = ({ league }) => (
	<Container>
		<div className="wrapper-league">
			<div className="avatar-league">
				<div>
					<img src={league.url_flamula_png} alt={league.nome} />
				</div>
			</div>

			<div className="detail">
				<div className="detail-league">
					<h3>{league.nome}</h3>
					<strong>{league.camp_ranking_num}°</strong>

					<p>Total de Times: {league.total_times_liga}</p>
				</div>
			</div>
		</div>
	</Container>
);

export default League;
