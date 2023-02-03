import type { HeadCellProps } from '../../../../types';

import * as Styled from './styles';
export function HeadCell({ children, onClick, ...rest }: HeadCellProps) {
  return (
    <Styled.HeadCell onClick={onClick} {...rest}>
      {children}
    </Styled.HeadCell>
  );
}
