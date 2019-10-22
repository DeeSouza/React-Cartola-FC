import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { FaSpinner } from 'react-icons/fa';
import * as Yup from 'yup';
import { loginRequest } from '../../store/modules/auth/actions';

import { WrapperLogin, ImageLogin, SubmitLogin } from './styles';

import logo from '../../assets/images/logo-react-cartola.svg';

const schema = Yup.object().shape({
	email: Yup.string()
		.required('Campo obrigatório')
		.email('Insira um e-mail válido'),
	password: Yup.string().required('Campo obrigatório'),
});

export default function Login() {
	const dispatch = useDispatch();
	const loading = useSelector(state => state.auth.loading);

	function handleSubmitLogin({ email, password }) {
		dispatch(loginRequest(email, password));
	}

	return (
		<WrapperLogin>
			<ImageLogin src={logo} />
			<h4>
				<span>REAC</span>ARTOLA FC
			</h4>

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

				<SubmitLogin type="submit">
					{loading ? <FaSpinner color="#000" size={18} /> : 'ENTRAR'}
				</SubmitLogin>
			</Form>
		</WrapperLogin>
	);
}
