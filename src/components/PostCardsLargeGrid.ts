import styled from 'styled-components';

const PostCardsLargeGrid = styled.article`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  grid-row-gap: 40px;
  margin-bottom: 20px;
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    grid-row-gap: 24px;
    grid-column-gap: 24px;
  }
`;

export default PostCardsLargeGrid;
