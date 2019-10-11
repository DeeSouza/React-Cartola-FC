import React from 'react';
import { Form, Input } from '@rocketseat/unform';

import { WrapperLogin, TitleLogin, SubmitLogin } from './styles';

export default function Login() {
	return (
		<WrapperLogin>
			<TitleLogin>REACT CARTOLA</TitleLogin>

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
