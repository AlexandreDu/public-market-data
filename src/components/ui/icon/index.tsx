import type { IconProps } from '../../../types';

import * as Styled from './styles';

export function Icon({ icon, fontSize, ...other }: IconProps) {
  return <Styled.Icon {...other} icon={icon} fontSize={fontSize} />;
}
