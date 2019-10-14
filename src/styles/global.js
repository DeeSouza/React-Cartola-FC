import { createGlobalStyle } from 'styled-components';
import settings from './variables';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
	@import url('https://fonts.googleapis.com/css?family=Roboto:100,300,500,600,400,700&display=swap');

	* {
		margin: 0;
		padding: 0;
		outline: 0;
		box-sizing: border-box;
	}

	*:focus{
		outline: none;
	}

	html, body, #root{
		height: 100%;
	}

	body{
		-webkit-font-smoothing: antialiased;
		overflow: auto;
	}

	body, input, button{
		font: 14px "${settings.fontRoboto}", sans-serif;
	}

	a{
		text-decoration: none;
	}

	ul{
		list-style: none;
	}

	button{
		cursor: pointer;
	}
`;
