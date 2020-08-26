import { graphql } from 'gatsby';
import React from 'react';
import SEO from 'react-seo-component';
import styled from 'styled-components';

import Layout from '../components/Layout';
import PostPageImage from '../components/PostPageImage';
import PostPageMarkdown from '../components/PostPageMarkdown';
import PostPageSection from '../components/PostPageSection';
import PostPageSubtitle from '../components/PostPageSubtitle';
import PostPageTitle from '../components/PostPageTitle';
import { pageWidth } from '../styles';

const Wrapper = styled.article`
  ${pageWidth};
  margin-top: 78px;
  padding-bottom: 20px;
  background-color: #ffffff;
`;

export default ({ data }) => (
  <Layout>
    <SEO
      title={data.contentfulBlogPost.title}
      titleTemplate={data.site.siteMetadata.title}
      description="{data.contentfulBlogPost.description.internal.content}"
      image={data.contentfulBlogPost.heroImage.fluid.src}
      pathname={`${data.site.siteMetadata.siteUrl}/recipes/${data.contentfulBlogPost.slug}`}
      siteLanguage="en"
      siteLocale="en_gb"
      twitterUsername=""
      author="Nicole Minkova"
      article={true}
      datePublished={data.contentfulBlogPost.createdAt}
      dateModified={data.contentfulBlogPost.updatedAt}
    />
    <Wrapper>
      <PostPageImage fluid={data.contentfulBlogPost.heroImage.fluid} />
      <PostPageSection>
        <PostPageTitle>{data.contentfulBlogPost.title}</PostPageTitle>
        <PostPageSubtitle>
          {data.contentfulBlogPost.createdAtFormated}
        </PostPageSubtitle>
      </PostPageSection>
      <PostPageSection>
        <PostPageMarkdown>
          {data.contentfulBlogPost.body.childMarkdownRemark.html}
        </PostPageMarkdown>
      </PostPageSection>
    </Wrapper>
  </Layout>
);

export const query = graphql`
  query RecipeQuery($slug: String!) {
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
    contentfulBlogPost(slug: { eq: $slug }) {
      slug
      title
      heroImage {
        fluid(maxWidth: 700, maxHeight: 400, quality: 85) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
      body {
        childMarkdownRemark {
          html
        }
      }
      createdAt
      createdAtFormated: createdAt(formatString: "Do MMMM YYYY")
    }
  }
`;
