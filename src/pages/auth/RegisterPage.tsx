import React from 'react';
import Header from '../../components/common/Header';
import AuthTemplate from '../../components/auth/AuthTemplate';
import AuthForm from '../../components/auth/AuthForm';

function RegisterPage() {
  return (
    <>
      <Header />
      <AuthTemplate>
        <AuthForm type='register' />
      </AuthTemplate>
    </>
  );
}

export default RegisterPage;
