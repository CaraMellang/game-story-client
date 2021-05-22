import React from 'react';
import { Route } from 'react-router';
import { createGlobalStyle } from 'styled-components';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import HomePage from './pages/home/HomePage';

function App() {
  return (
    <>
			<GlobalStyle />
			<Route path='/' component={HomePage} exact />
			<Route path='/login' component={LoginPage} />
			<Route path='/register' component={RegisterPage} />
    </>
  );
}

const GlobalStyle = createGlobalStyle`
	html, body, #root {
		height: 100%;
	}
`;

export default App;
