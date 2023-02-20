import styled from 'styled-components';
export const MenuItemWithExpand = styled.div``;

export const Wrapper = styled.div`
  ${({ theme }) => `
    display: flex;
    align-items: center;
    gap: ${theme.spaces.md};
`}
`;
