import styled from 'styled-components';
import { motion } from 'framer-motion';
export const Sidebar = styled(motion.div)`
  ${({ theme }) => `
    position: fixed;
    bottom: 0;
    top: 0;
    height: 100%;
    background-color: ${theme.colors.blue};
  `}
`;

// we use a wrapper to set the padding to avoid issue on transition when sidebar is opened and closed
export const PaddingWrapper = styled.div`
  ${({ theme }) => `
    padding-right: ${theme.spaces.md};
  `}
`;
