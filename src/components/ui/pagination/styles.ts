import styled from 'styled-components';

export const Pagination = styled.div``;

export const WrapperPaginationBox = styled.div`
  ${({ theme }) => `
      margin-top: ${theme.spaces.sm};
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: ${theme.spaces.md};
    `}
`;
