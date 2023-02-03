import styled from 'styled-components';

export const Layout = styled.div`
  ${({ theme }) => `
  padding: ${theme.spaces.md};
  @media(min-width: ${theme.breakpoints.lg}) {
    width: 80%;
    margin: 0 auto;
  
  }

`}
`;
