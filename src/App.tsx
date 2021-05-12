import React from 'react';
import { Route } from 'react-router';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import HomePage from './pages/home/HomePage';

function App() {
  return (
    <>
			<Route path='/' component={HomePage} exact />
			<Route path='/login' component={LoginPage} />
			<Route path='/register' component={RegisterPage} />
    </>
  );
}

export default App;
