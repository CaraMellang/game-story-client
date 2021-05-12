import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../../lib/styles/colors';

export type AuthFormProps = {
  type: string;
};

const AuthForm = ({ type }: AuthFormProps) => {
  const title = type === 'login' ? '로그인' : '회원가입';

  return (
    <>
      <AuthFormBlock>
        <div className='title-logo'>{title}</div>
        <hr className='title-line' />
        <label className='form-text'>아이디</label>
        <StyledInput name='id' placeholder='아이디를 입력해주세요!' />
        <label className='form-text'>비밀번호</label>
        <StyledInput
          type='password'
          name='password'
          placeholder='비밀번호를 입력해주세요!'
        />
        {type === 'register' && (
          <>
            <label className='form-text'>비밀번호 확인</label>
            <StyledInput
              type='password'
              name='passwordConfirm'
              placeholder='비밀번호를 다시 한번 입력해주세요!'
            />
          </>
        )}
        <Footer>
          {type === 'login' ? (
            <>
              <StyledButton>로그인</StyledButton>
              <div>
                <span className='footer-margin'>계정이 필요하신가요?</span>
                <Link to='/register'>회원가입</Link>
              </div>
            </>
          ) : (
            <>
              <StyledButton>회원가입</StyledButton>
              <div>
                <span className='footer-margin'>이미 계정이 있으신가요?</span>
                <Link to='/login'>로그인</Link>
              </div>
            </>
          )}
        </Footer>
      </AuthFormBlock>
    </>
  );
};

const AuthFormBlock = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;

  .title-logo {
    color: ${colors.blue[9]};
    font-weight: bold;
    font-size: 1.4rem;
  }

  .title-line {
    margin: 0;
    margin-bottom: 2rem;
    padding: 0;
    width: auto;
    border: 4px solid;
    border-color: ${colors.blue[8]};
  }

  .form-text {
    font-size: 0.8rem;
    font-weight: bold;
  }
`;

const StyledInput = styled.input`
  margin: 0;
  margin-bottom: 1rem;
  padding: 0.5rem 0;
  border-top: 0;
  border-left: 0;
  border-right: 0;
  border-bottom: 2px solid;
  outline: none;

  &:focus {
    color: $oc-teal-7;
    border-bottom: 2px solid ${colors.blue[9]};
  }
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.8rem;
  font-weight: bold;
  color: gray;
  margin-top: 1rem;

  .footer-margin {
    margin-right: 0.5rem;
  }

	a {
		color: ${colors.indigo[9]};
	}
`;

const StyledButton = styled.button`
  all: unset;
  background: ${colors.blue[8]};
  padding: 0.5rem 1.5rem;
  border-radius: 20px;
  color: white;
  font-weight: bold;
  cursor: pointer;
`;

export default AuthForm;
