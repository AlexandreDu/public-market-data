import styled from 'styled-components';

export const Input = styled.input`
  ${({ theme }) => `
    border: none;
    font-size: ${theme.fontSizes.md};
  
  `}
`;
