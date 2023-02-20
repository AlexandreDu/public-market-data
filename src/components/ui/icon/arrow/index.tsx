import type { ArrowProps } from '../../../../types';

import {
  faArrowUp,
  faArrowDown,
  faArrowRightArrowLeft,
} from '@fortawesome/free-solid-svg-icons';

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
      }}
    />
  );
}

export function ArrowDown({ ...props }: ArrowProps) {
  const theme = useTheme();
  const { style } = props;

  return (
    <Icon
      {...props}
      icon={faArrowDown}
      {...(style ? { style: { color: theme.colors.white, ...style } } : {})}
    />
  );
}

export function ArrowExchange({ ...props }: ArrowProps) {
  const { style } = props;

  return (
    <Icon
      {...props}
      icon={faArrowRightArrowLeft}
      {...(style ? { style: { ...style } } : {})}
    />
  );
}
