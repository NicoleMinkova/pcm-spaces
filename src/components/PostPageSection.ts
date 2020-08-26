import styled from 'styled-components';

import { pagePadding } from '../styles';

const PostPageSection = styled.section`
  ${pagePadding};
  &:not(:last-child) {
    margin-bottom: 16px;
  }
`;

export default PostPageSection;
