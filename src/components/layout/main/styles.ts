import styled from 'styled-components';
import { motion } from 'framer-motion';
export const Main = styled(motion.main)`
  ${({ theme }) => `
    padding-top: ${theme.spaces.md};
    padding-bottom: ${theme.spaces.md};
    padding-right: ${theme.spaces.md};
    display: flex;
    flex-direction: column;

  `}
`;
