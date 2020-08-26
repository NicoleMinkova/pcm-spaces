import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  p:not(:last-child) {
    margin-bottom: 16px;
  }
  img {
    width: 100%;
  }
  strong {
    font-weight: 700;
  }
`;

interface Props {
  children: string;
}

const PostPageMarkdown: React.FC<Props> = (props) => (
  <Wrapper
    dangerouslySetInnerHTML={{
      __html: props.children,
    }}
  />
);

export default PostPageMarkdown;
