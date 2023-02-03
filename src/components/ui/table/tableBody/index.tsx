import type { TableBodyProps } from '../../../../types';

import * as Styled from './styles';
export function TableBody({ children }: TableBodyProps) {
  return <Styled.TableBody>{children}</Styled.TableBody>;
}
