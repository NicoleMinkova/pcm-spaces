import React from 'react';
import styled from 'styled-components';

import { pagePadding, pageWidth } from '../styles';

const Wrapper = styled.footer`
  ${pageWidth};
  ${pagePadding};
  padding-top: 32px;
  padding-bottom: 32px;
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
`;

interface Props {}

const Footer: React.FC<Props> = (props) => (
  <Wrapper>
    <InnerWrapper>
      <p>Copyright © 2020 Exane BNP Paribas</p>
    </InnerWrapper>
  </Wrapper>
);

export default Footer;
