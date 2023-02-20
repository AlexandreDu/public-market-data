import styled from 'styled-components';

export const AutoComplete = styled.ul`
  list-style: none;
  ${({ theme }) => `
    padding-top: ${theme.spaces.md};
    font-size: ${theme.fontSizes.md};
    color: ${theme.colors.white};
 
    > * {
      cursor: pointer;
    }
`}
`;
