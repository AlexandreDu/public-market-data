import styled from 'styled-components';
export const TableWrapper = styled.div`
  ${({ theme }) => `
    overflow-x: auto;
    border-radius: ${theme.radiuses.md};
    
  `}
`;
export const Table = styled.table`
  text-align: center;
  border-collapse: collapse;
  margin: 0 auto;
  width: 100%;
`;
