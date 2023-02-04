import styled from 'styled-components';

export const PaginationBox = styled.div<{ isSelected: boolean }>`
  ${({ theme, isSelected }) => `
    min-width: 1.825rem;
    min-height: 1.825rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-radius: ${theme.radiuses.sm};
    user-select: none;
    ${
      isSelected
        ? `
      background-color: ${theme.colors.white};
      color: ${theme.colors.black};

    `
        : ''
    }
  `}
`;
