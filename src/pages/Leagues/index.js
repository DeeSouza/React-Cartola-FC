import React, { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import { toast } from 'react-toastify';

import Card from '../../components/Card';
import League from '../../components/League';

import { Container, LeaguesName } from './styles';

import cartolaAPI from '../../services/cartola';

const Leagues = () => {
	const [leagues, setLeagues] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		async function loadLeagues() {
			try {
				const { data } = await cartolaAPI.get('auth/ligas');

				setLeagues(data.ligas);
				setLoading(false);
			} catch (error) {
				toast.error(
					'😭 😭 😭 Houve um problema ao carregar as ligas que você participa.'
				);
			}
		}

		loadLeagues();
	}, []);

	return (
		<Container>
			<Card nopadding>
				{!loading ? (
					<LeaguesName>
						{leagues.map(league => (
							<League league={league} key={league.liga_id} />
						))}
					</LeaguesName>
				) : (
					<div className="skeleton circle">
						<Skeleton circle height={50} width={50} />
						<Skeleton height={50} />
					</div>
				)}
			</Card>
		</Container>
	);
};

export default Leagues;
