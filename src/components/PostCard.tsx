import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

import PostCardCategory from './PostCardCategory';
import PostCardImage from './PostCardImage';
import PostCardTextContainer from './PostCardTextContainer';
import PostCardTitle from './PostCardTitle';

const Wrapper = styled.section`
  transform: scale(1);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s, box-shadow 0.6s;
  &:hover {
    transform: scale(1.01);
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  }
`;

interface Props {
  title: string;
  category: string;
  image: any;
  slug: string;
}

const PostCard: React.FC<Props> = (props) => (
  <Wrapper>
    <Link to={`/blog/${props.slug}`} aria-label={props.title}>
      <PostCardImage fluid={props.image.fluid} />
      <PostCardTextContainer>
        <PostCardCategory>{props.category}</PostCardCategory>
        <PostCardTitle>{props.title}</PostCardTitle>
      </PostCardTextContainer>
    </Link>
  </Wrapper>
);

export default PostCard;
