import React from 'react';
import styled from 'styled-components';
import colors from '../../lib/styles/colors';
import { AiFillGithub } from 'react-icons/ai';
import { IoGameController } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import media from '../../lib/styles/media';

function Header() {
  return (
    <>
      <HeaderBlock>
        <Link to='/'>
          <LeftBlock>GameStory</LeftBlock>
        </Link>
        <RightBlock>
          <a
            href='http://gamejigix.induk.ac.kr/gongji'
            target='_blank'
            rel='noopener noreferrer'
          >
            <StyledIoGameController size={30} color={colors.blue[9]} />
          </a>
          <a
            href='https://github.com/Jungma1/game-story'
            target='_blank'
            rel='noopener noreferrer'
          >
            <StyledAiFillGithub size={30} color={colors.blue[9]} />
          </a>
          <Link to='/login'>
            <button>로그인</button>
          </Link>
        </RightBlock>
      </HeaderBlock>
      <StyledHr />
    </>
  );
};

const HeaderBlock = styled.div`
  height: 4rem;
  display: flex;
	padding: 0px 16px;
  justify-content: space-between;
  align-items: center;
`;

const LeftBlock = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${colors.blue[9]};
  cursor: pointer;
`;

const RightBlock = styled.div`
  display: flex;
  align-items: center;

  ${media.small} {
    display: none;
  }

  button {
    margin-left: 1rem;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-weight: bold;
    color: white;
    background: ${colors.blue[9]};
    cursor: pointer;

    &:hover {
      background: ${colors.blue[7]};
    }
  }

  a {
    display: flex;
    align-items: center;
  }
`;

const StyledAiFillGithub = styled(AiFillGithub)`
  margin-left: 1rem;
  opacity: 0.7;

  &:hover {
    opacity: 1;
  }
`;

const StyledIoGameController = styled(IoGameController)`
  opacity: 0.7;

  &:hover {
    opacity: 1;
  }
`;

const StyledHr = styled.hr`
	margin: 0;
  border: 1px solid;
  border-color: ${colors.blue[8]};
`;

export default Header;
