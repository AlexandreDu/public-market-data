import styled from 'styled-components';

export const HeadCell = styled.th`
  ${({ theme }) => `
  border: 1px solid red;
  padding: ${theme.spaces.sm};
  `}
`;
