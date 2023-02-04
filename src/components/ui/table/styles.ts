import styled from 'styled-components';
export const TableWrapper = styled.div`
  ${({ theme }) => `
    overflow-x: auto;
   
    border-radius: ${theme.radiuses.md};
    padding: ${theme.spaces.md};
    box-shadow: 0px 0px 10px ${theme.colors.grey};
  `}
`;
export const Table = styled.table`
  text-align: center;
  border-collapse: collapse;
  margin: 0 auto;
  width: 100%;
`;
