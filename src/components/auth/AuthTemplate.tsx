import React, { ReactNode } from 'react';
import styled from 'styled-components';

export type AuthTemplateProps = {
  children: ReactNode;
};

function AuthTemplate({ children }: AuthTemplateProps) {
  return (
    <AuthTemplateBlock>
      <StyledBox>{children}</StyledBox>
    </AuthTemplateBlock>
  );
}

const AuthTemplateBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 16px;
  height: 90%;
`;

const StyledBox = styled.div`
  width: 360px;
`;

export default AuthTemplate;
