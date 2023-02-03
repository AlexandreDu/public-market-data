import styled from 'styled-components';

export const TableRow = styled.tr`
  ${({ theme }) => `
    border-bottom: 1px solid ${theme.colors.grey};
  `};
`;
