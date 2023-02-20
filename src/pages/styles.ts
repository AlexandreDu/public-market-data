import styled from 'styled-components';

// home page

export const HomePageWrapper = styled.div`
  ${({ theme }) => `
  display: flex;
  flex-direction: column;
  gap: ${theme.spaces.md};
  @media(min-width: ${theme.breakpoints.md}) {
   
  }
  `}
`;
