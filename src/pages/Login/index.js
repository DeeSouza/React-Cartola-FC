import React from 'react';
import { Form, Input } from '@rocketseat/unform';

import { WrapperLogin, ImageLogin, SubmitLogin } from './styles';

import logo from '../../assets/images/logo-react-cartola.svg';

export default function Login() {
	return (
		<WrapperLogin>
			<ImageLogin src={logo} />

			<Form autoComplete="off">
				<Input
					name="email"
					type="email"
					placeholder="Digite seu e-mail"
				/>

				<Input
					name="password"
					type="password"
					placeholder="Digite sua senha"
				/>

				<SubmitLogin type="submit">ENTRAR</SubmitLogin>
			</Form>
		</WrapperLogin>
	);
}
