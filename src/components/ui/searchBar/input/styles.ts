import styled from 'styled-components';

export const Input = styled.input`
  ${({ theme }) => `
    width: 100%;
    background-color: ${theme.colors.blue};
    border: none;
    font-size: ${theme.fontSizes.md};
    color:${theme.colors.white};
  `}
`;
