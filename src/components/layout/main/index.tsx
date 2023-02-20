import type { MainProps } from '../../../types';

import { useSidebar } from '../../../hooks/context/sidebar';

import { useTheme } from 'styled-components';

import * as Styled from './styles';

export function Main({ children }: MainProps) {
  const theme = useTheme();
  const { isSidebarExpanded } = useSidebar();

  // 72 px is the width of the sidebar when closed, 225 when expanded
  const mainVariants = {
    expanded: {
      paddingLeft: `calc(225px + ${theme.spaces.md}`,
      width: 'calc(100%)',
    },
    closed: {
      paddingLeft: `calc(72px + ${theme.spaces.md}`,
      width: 'calc(100%)',
    },
  };

  return (
    <Styled.Main
      initial={false}
      animate={isSidebarExpanded ? 'expanded' : 'closed'}
      variants={mainVariants}
      transition={{ duration: theme.transitions.md }}
    >
      {children}
    </Styled.Main>
  );
}
