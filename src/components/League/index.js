import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Container } from './styles';

const League = ({ league }) => (
	<Container>
		<Link
			className="wrapper-league"
			to={{
				pathname: '/league',
				state: {
					slug: league.slug,
				},
			}}
		>
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
		</Link>
	</Container>
);

League.propTypes = {
	league: PropTypes.shape({
		url_flamula_png: PropTypes.string.isRequired,
		slug: PropTypes.string.isRequired,
		nome: PropTypes.string.isRequired,
		camp_ranking_num: PropTypes.number.isRequired,
		total_times_liga: PropTypes.number.isRequired,
	}).isRequired,
};

export default League;
