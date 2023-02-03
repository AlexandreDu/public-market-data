import styled from 'styled-components';

export const DataCell = styled.td`
  ${({ theme }) => `
    border: 1px solid red;
    padding: ${theme.spaces.md};
  `}
`;
