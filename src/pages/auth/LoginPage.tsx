import React from 'react';
import AuthForm from '../../components/auth/AuthForm';
import AuthTemplate from '../../components/auth/AuthTemplate';
import Block from '../../components/common/Block';
import Header from '../../components/common/Header';

function LoginPage() {
  return (
    <>
      <Header />
      <Block>
        <AuthTemplate>
          <AuthForm type='login' />
        </AuthTemplate>
      </Block>
    </>
  );
}

export default LoginPage;
