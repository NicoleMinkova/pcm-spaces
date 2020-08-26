import { graphql } from 'gatsby';
import React from 'react';
import SEO from 'react-seo-component';

// import About from '../components/About';
import Hero from '../components/Hero';
import Layout from '../components/Layout';
import PostCard from '../components/PostCard';
import PostCardsLargeGrid from '../components/PostCardsLargeGrid';
import PostCardsLargeGridSection from '../components/PostCardsLargeGridSection';
import ThematicBreak from '../components/ThematicBreak';

interface Props {}

const IndexPage: React.FC<Props> = ({ data }) => (
  <Layout home={true}>
    <SEO
      title={data.site.siteMetadata.title}
      titleTemplate="Home"
      description={data.site.siteMetadata.description}
      image=""
      pathname={`${data.site.siteMetadata.siteUrl}/`}
      siteLanguage="en"
      siteLocale="en_gb"
      twitterUsername=""
    />
    <Hero description="Hi, I'm Owlie. Welcome to my blog where you can find unmissable news from the PCM team at Exane!" />
    <PostCardsLargeGridSection>
      <PostCardsLargeGrid>
        {data.allContentfulBlogPost.edges.map(({ node: post }) => (
          <PostCard
            key={post.id}
            title={post.title}
            category={post.category}
            image={post.heroImage}
            slug={post.slug}
          ></PostCard>
        ))}
      </PostCardsLargeGrid>
    </PostCardsLargeGridSection>
    <ThematicBreak />
  </Layout>
);

export const query = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
        description
        siteUrl
      }
    }
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          category
          heroImage {
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;
