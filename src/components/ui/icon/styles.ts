import type { IconProps } from '../../../types';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const propsOnlyForStyledComponents = ['fontSize'];

export const Icon = styled(motion(FontAwesomeIcon)).withConfig({
  shouldForwardProp: (prop) => !propsOnlyForStyledComponents.includes(prop),
})<IconProps>`
  ${({ fontSize }) => `
    cursor: pointer;
    ${fontSize ? `font-size: ${fontSize};` : ''}
  `}
`;
