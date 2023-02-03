import type { TableRowProps } from '../../../../types';

import * as Styled from './styles';

export function TableRow({ children }: TableRowProps) {
  return <Styled.TableRow>{children}</Styled.TableRow>;
}
