import React from 'react';
import MainTemplate from '../../components/common/Block';
import Header from '../../components/common/Header';
import Block from '../../components/common/Block';
import AuthTemplate from '../../components/auth/AuthTemplate';
import AuthForm from '../../components/auth/AuthForm';

function RegisterPage() {
  return (
    <MainTemplate>
      <Header />
      <Block>
        <AuthTemplate>
          <AuthForm type='register' />
        </AuthTemplate>
      </Block>
    </MainTemplate>
  );
}

export default RegisterPage;
