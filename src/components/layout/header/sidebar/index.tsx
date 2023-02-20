import { useSidebar } from '../../../../hooks/context/sidebar';
import { useTheme } from 'styled-components';
import * as Styled from './styles';
import { HamburgerIcon } from './hamburgerIcon';
import { Menu } from './menu';

export function Sidebar() {
  const theme = useTheme();

  const sidebarVariants = {
    isExpanded: {
      width: 225,
    },
    isClosed: {
      width: `calc(40px + ${theme.spaces.md} + ${theme.spaces.md})`,
    },
  };
  const { isSidebarExpanded } = useSidebar();

  return (
    <Styled.Sidebar
      initial={false}
      variants={sidebarVariants}
      animate={isSidebarExpanded ? 'isExpanded' : 'isClosed'}
      transition={{ duration: theme.transitions.md }}
    >
      <Styled.PaddingWrapper>
        <HamburgerIcon />
        <Menu />
      </Styled.PaddingWrapper>
    </Styled.Sidebar>
  );
}
