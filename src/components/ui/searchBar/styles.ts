import styled from 'styled-components';
import { Input } from './input/styles';
import { Icon } from '../icon/styles';

export const SearchBar = styled.form.attrs((props) => ({
  name: 'searchbar',
}))`
  ${({ theme }) => `
    min-height: 3.5rem;
    display: flex;
    flex-direction: column;
    padding: ${theme.spaces.md};
    background-color: ${theme.colors.white};
    color: ${theme.colors.black};
    border-radius: ${theme.radiuses.sm};
  `}
`;

export const InputIconWrapper = styled.div`
  ${({ theme }) => `
  display: flex;
  align-items: center;
    > ${Icon} {
      padding-right: ${theme.spaces.md};
    }
    > ${Input} {
      flex-grow: 1;
      font-size: ${theme.fontSizes.md};

    }
  `}
`;
