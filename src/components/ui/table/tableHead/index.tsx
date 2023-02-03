import type { TableHeadProps } from '../../../../types';

import * as Styled from './styles';

export function TableHead({ children }: TableHeadProps) {
  return <Styled.TableHead>{children}</Styled.TableHead>;
}
