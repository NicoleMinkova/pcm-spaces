import { css } from 'styled-components';

export const pageWidth = css`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  @media (min-width: 576px) {
    width: 92%;
  }
  @media (min-width: 992px) {
    width: 86%;
  }
  @media (min-width: 1200px) {
    width: 80%;
  }
`;

export const pagePadding = css`
  padding: 0 20px;
`;

export const button = css`
  display: block;
  padding: 14px 20px;
  color: #ffffff;
  background-color: #008580;
  border-radius: 3px;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    background-color: #c45870;
  }
  &:active {
    position: relative;
    top: 1px;
  }
`;

export const truncate = css`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
