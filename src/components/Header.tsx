import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

import HeaderTitle from './HeaderTitle';
import { pagePadding, pageWidth } from '../styles';

const Wrapper = styled.header`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 50%;
  ${pageWidth};
  ${pagePadding};
  height: 78px;
  transform: translateX(-50%);
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
`;

interface Props {
  home?: boolean;
  title: string;
}

const Header: React.FC<Props> = (props) => (
  <Wrapper>
    <InnerWrapper>
      <HeaderTitle invert={props.home}>
        <Link to="/">{props.title}</Link>
      </HeaderTitle>
    </InnerWrapper>
  </Wrapper>
);

export default Header;
