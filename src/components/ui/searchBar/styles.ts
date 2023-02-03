import styled from 'styled-components';
import { Input } from './input/styles';
export const SearchBar = styled.form`
  ${({ theme }) => `
  min-height: 3.5rem;
  display: flex;
  flex-direction: column;
  padding: ${theme.spaces.md};
  background-color: ${theme.colors.white};
  color: ${theme.colors.black};
  border-radius: ${theme.radiuses.sm};
  > ${Input} {
    flex-grow: 1;
  }
    
    
  `}
`;
