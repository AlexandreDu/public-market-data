import type { ArrowProps } from '../../../../types';

import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';

import { useTheme } from 'styled-components';
import { Icon } from '..';

export function ArrowUp({ ...props }: ArrowProps) {
  const theme = useTheme();
  return (
    <Icon
      {...props}
      icon={faArrowUp}
      style={{
        color: theme.colors.white,
        cursor: 'pointer',
      }}
    />
  );
}

export function ArrowDown({ ...props }: ArrowProps) {
  const theme = useTheme();
  return (
    <Icon
      {...props}
      icon={faArrowDown}
      style={{
        color: theme.colors.white,
        cursor: 'pointer',
      }}
    />
  );
}
