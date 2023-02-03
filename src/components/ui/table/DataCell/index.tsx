import type { DataCellProps } from '../../../../types';

import * as Styled from './styles';

export function DataCell({ children }: DataCellProps) {
  return <Styled.DataCell>{children}</Styled.DataCell>;
}
