import React, { ReactNode } from 'react';
import styled from 'styled-components';
import media from '../../lib/styles/media';

export type BlockProps = {
  children: ReactNode;
};

function Block({ children }: BlockProps) {
  return <MainBlock>{children}</MainBlock>;
};

const MainBlock = styled.div`
  width: 1728px;
  margin-left: auto;
  margin-right: auto;

  ${media.xxlarge} {
    width: 1376px;
  }

  ${media.xlarge} {
    width: 1280px;
  }

  ${media.large} {
    /* width: 912px; */
		width: calc(100% - 2rem);
  }

  ${media.medium} {
    width: calc(100% - 2rem);
  }

  ${media.small} {
    width: calc(100% - 2rem);
  }

  ${media.xsmall} {
    width: calc(100% - 2rem);
  }
`;

export default Block;
