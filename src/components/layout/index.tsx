import type { LayoutProps } from '../../types';

import * as Styled from './styles';

export function Layout({ children }: LayoutProps) {
  return <Styled.Layout>{children}</Styled.Layout>;
}
