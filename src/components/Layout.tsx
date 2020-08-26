import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

import Footer from './footer';
import Header from './header';
import GlobalStyle from '../styles/GlobalStyle';

const Wrapper = styled.main``;

interface Props {
  home?: boolean;
}

const Layout: React.FC<Props> = (props) => {
  const data = useStaticQuery(graphql`
    query LayoutQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <Wrapper>
      <GlobalStyle />
      <Header home={props.home} title={data.site.siteMetadata.title} />
      {props.children}
      <Footer />
    </Wrapper>
  );
};

export default Layout;
