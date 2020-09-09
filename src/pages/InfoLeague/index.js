import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import { toast } from 'react-toastify';

import Card from '../../components/Card';
import Team from '../../components/Team';

import { Container, TeamsName } from './styles';

import cartolaAPI from '../../services/cartola';

const InfoLeague = () => {
	const [teams, setTeams] = useState([]);
	const [loading, setLoading] = useState(true);

	const location = useLocation();

	useEffect(() => {
		async function loadInfoLeague() {
			try {
				const { data } = await cartolaAPI.get(
					`auth/liga/${location.state.slug}`
				);

				setTeams(data.times);
				setLoading(false);
			} catch (error) {
				toast.error(
					'😭 😭 😭 Houve um problema ao carregar as informações dessa liga.'
				);
			}
		}

		loadInfoLeague();
	}, [location.state.slug]);

	return (
		<Container>
			<Card nopadding>
				{!loading ? (
					<TeamsName>
						{teams.map(team => (
							<Team key={team.time_id} team={team} />
						))}
					</TeamsName>
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

export default InfoLeague;
