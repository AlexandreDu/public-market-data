import type { TableProps } from '../../../types';
import * as Styled from './styles';

export function Table({ children }: TableProps) {
  return (
    <Styled.TableWrapper>
      <Styled.Table>{children}</Styled.Table>
    </Styled.TableWrapper>
  );
}
