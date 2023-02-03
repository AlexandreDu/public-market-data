import styled from 'styled-components';

export const HeadCell = styled.th`
  ${({ theme }) => `
  padding: ${theme.spaces.md};
  white-space: nowrap;
  `}
`;
