import styled from 'styled-components';

const HeaderTitle = styled.h1`
  color: ${(props) => (props.invert ? '#ffffff' : '#000000')};
  font-size: 24px;
`;

export default HeaderTitle;
