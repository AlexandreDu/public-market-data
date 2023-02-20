import type { SidebarProviderProps } from '../../types';

import { useState } from 'react';

import { SidebarContext } from '../../context/sidebar';
export function SidebarProvider({ children }: SidebarProviderProps) {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

  function toggleSidebar() {
    setIsSidebarExpanded((prevState) => !prevState);
  }

  return (
    <SidebarContext.Provider value={{ isSidebarExpanded, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
}
