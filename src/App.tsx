import React from 'react';
import { Route } from 'react-router';
import MainPage from './pages/MainPage';

function App() {
  return (
    <>
      <Route path='/' component={MainPage} exact />
    </>
  );
}

export default App;
