import styled from 'styled-components';
import { PaginationBox } from './paginationBox/styles';

export const Pagination = styled.div``;

export const WrapperPaginationBox = styled.div`
  ${({ theme }) => `
      margin-top: ${theme.spaces.sm};
      display: flex;
      flex-wrap: wrap;
      gap: ${theme.spaces.md};
      > ${PaginationBox}:not(:last-child) {
        flex-grow: 1;
      }
    `}
`;
