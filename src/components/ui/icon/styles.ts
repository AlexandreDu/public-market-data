import type { IconProps } from '../../../types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const propsOnlyForStyledComponents = ['fontSize'];

export const Icon = styled(FontAwesomeIcon).withConfig({
  shouldForwardProp: (prop) => !propsOnlyForStyledComponents.includes(prop),
})<IconProps>`
  ${({ fontSize }) => `
    ${fontSize ? `font-size: ${fontSize};` : ''}
  `}
`;
