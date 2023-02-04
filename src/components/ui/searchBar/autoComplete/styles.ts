import styled from 'styled-components';

export const AutoComplete = styled.div`
  ${({ theme }) => `
    padding-top: ${theme.spaces.md};
    font-size: ${theme.fontSizes.md};
    > * {
      cursor: pointer;
    }
`}
`;
