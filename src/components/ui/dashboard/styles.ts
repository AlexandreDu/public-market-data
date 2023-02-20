import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Card } from '../../../components/ui/card/styles';
import { CardContent } from '../../../components/ui/card/styles';

export const Wrapper = styled(motion.div)`
  ${({ theme }) => `
    height: 100%;
    padding-top: ${theme.spaces.md};
    display: flex;
    flex-wrap: wrap;
    

    gap: ${theme.spaces.md};
    > ${Card} {
      flex-basis: 100%;
      min-width: 0;
      flex-grow: 1;
     
     
    }
   
    > ${Card}:nth-child(4) {
      flex-basis: 100%;
      > ${CardContent} {
        height: 400px;
      }
    }
    @media(min-width: ${theme.breakpoints.sm}) {
     
      > ${Card}:nth-child(-n+3) {
        flex-basis: 32.5%;

      }
      
    }
  `}
`;
