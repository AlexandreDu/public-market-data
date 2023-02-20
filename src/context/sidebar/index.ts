import { createContext } from 'react';

const defaultValue = null;

export const SidebarContext = createContext<null | {
  isSidebarExpanded: boolean;
  toggleSidebar: () => void;
}>(defaultValue);
