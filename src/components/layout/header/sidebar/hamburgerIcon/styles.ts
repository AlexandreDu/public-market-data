import styled from 'styled-components';
import { motion } from 'framer-motion';

export const HamburgerIcon = styled(motion.button)`
  ${({ theme }) => `
    background: none;
    border: none;
    z-index: 1;
    height: 40px;
    width: 40px;
    cursor: pointer;
    margin-left: ${theme.spaces.md};
    margin-top: ${theme.spaces.md};
    margin-bottom: ${theme.spaces.md};
  `};
`;
