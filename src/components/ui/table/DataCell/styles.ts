import styled from 'styled-components';

export const DataCell = styled.td`
  ${({ theme }) => `
    padding: ${theme.spaces.md};
    position: relative;
  `}
`;
