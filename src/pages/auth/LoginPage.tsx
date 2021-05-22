import React from 'react';
import AuthForm from '../../components/auth/AuthForm';
import AuthTemplate from '../../components/auth/AuthTemplate';
import Header from '../../components/common/Header';

function LoginPage() {
  return (
    <>
      <Header />
      <AuthTemplate>
        <AuthForm type='login' />
      </AuthTemplate>
    </>
  );
}

export default LoginPage;
