import { useContext } from 'react';
import { SidebarContext } from '../../../context/sidebar';
export function useSidebar() {
  const sidebarContext = useContext(SidebarContext);

  if (!sidebarContext) {
    throw new Error('useSidebar must be use withhin its provider');
  }

  const { isSidebarExpanded, toggleSidebar } = sidebarContext;

  return { isSidebarExpanded, toggleSidebar };
}
