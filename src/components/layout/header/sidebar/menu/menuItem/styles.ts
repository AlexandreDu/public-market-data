import styled from 'styled-components';

import { motion } from 'framer-motion';
// 32px is the width of the menuItem Icons and 40px is the width of the hamburgerMenu
export const MenuItem = styled.div.withConfig({
  shouldForwardProp: (prop) => !['level', 'hasIcon'].includes(prop),
})<{ level: number; hasIcon: boolean }>`
  ${({ theme, hasIcon, level }) => `
    ${
      hasIcon
        ? `padding-left: calc(
      (40px - 32px) / 2 + (${level} * ${theme.spaces.md})
    );`
        : `padding-left: calc(
          40px + ${theme.spaces.md} + (${level} * ${theme.spaces.md})
        );`
    }
    display: block;
    color: black;
    padding-top: ${theme.spaces.md};
    padding-bottom: ${theme.spaces.md};
    white-space: nowrap;   
  `}
`;

export const Title = styled(motion.span)<{ color: string }>`
  ${({ theme, color }) => `
    font-weight: bold;
    ${color ? `color: ${color}` : ''};
    &: hover {
      color: white;
    }
  `}
`;

export const Wrapper = styled.div`
  ${({ theme }) => `
    display: flex;
    align-items: center;
    gap: ${theme.spaces.md};
  `}
`;
