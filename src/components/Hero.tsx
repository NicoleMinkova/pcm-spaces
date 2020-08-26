import React from 'react';
import styled from 'styled-components';

import HeroDescription from './HeroDescription';
import HeroImage from './HeroImage';
import { pagePadding, pageWidth } from '../styles';

const Wrapper = styled.article`
  width: 100%;
  background: rgb(0, 37, 38);
  background: linear-gradient(
    90deg,
    rgba(0, 85, 89, 1) 0%,
    rgba(0, 85, 89, 1) 35%,
    rgba(0, 130, 134, 1) 100%
  );
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: contain;
  z-index: 0;
  position: relative;
  padding-top: 78px;
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${pageWidth}
  ${pagePadding}
  @media (min-width: 768px) {
    flex-direction: row-reverse;
  }
`;

interface Props {
  description: string;
}

const Hero: React.FC<Props> = (props) => (
  <Wrapper>
    <InnerWrapper>
      <HeroImage src="/g2081.png" />
      <HeroDescription>{props.description}</HeroDescription>
    </InnerWrapper>
  </Wrapper>
);

export default Hero;
