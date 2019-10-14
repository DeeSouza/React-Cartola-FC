import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { WrapperLogin, ImageLogin, SubmitLogin } from './styles';

import logo from '../../assets/images/logo-react-cartola.svg';

const schema = Yup.object().shape({
	email: Yup.string()
		.required('Campo obrigatório')
		.email('Insira um e-mail válido'),
	password: Yup.string().required('Campo obrigatório'),
});

export default function Login() {
	function handleSubmitLogin(data) {}

	return (
		<WrapperLogin>
			<ImageLogin src={logo} />

			<Form
				autoComplete="off"
				onSubmit={handleSubmitLogin}
				schema={schema}
			>
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
