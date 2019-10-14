import React, { useState, useEffect } from 'react';

// import { Container } from './styles';
import cartolaAPI from '../../services/cartola';

export default function Dashboard() {
	useEffect(() => {
		async function loadStatusMercado() {
			const response = await cartolaAPI.get('mercado/status');
			console.log(response.data);
		}

		loadStatusMercado();
	});
	return <h1>DASHBOARD CARTOLA</h1>;
}
