import type { MenuItemProps } from '../../../../../../types';

import { AnimatePresence } from 'framer-motion';
import { useTheme } from 'styled-components';

import { useSidebar } from '../../../../../../hooks/context/sidebar';

import * as Styled from './styles';
import { Icon } from '../../../../../ui/icon';
import { NavLink } from 'react-router-dom';

export function MenuItem({ level, label, icon, to }: MenuItemProps) {
  const theme = useTheme();
  const { isSidebarExpanded } = useSidebar();

  return (
    <Styled.MenuItem level={level as number} hasIcon={!!icon}>
      <NavLink to={to} style={{ textDecoration: 'none' }}>
        {({ isActive }) => {
          const color = isActive ? theme.colors.lightGreen : theme.colors.grey;
          return (
            <Styled.Wrapper>
              {icon && (
                <Icon
                  icon={icon}
                  size={'4x'}
                  style={{
                    color,
                    width: '32px',
                  }}
                />
              )}
              <AnimatePresence>
                {isSidebarExpanded && (
                  <Styled.Title
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    color={color}
                  >
                    {label}
                  </Styled.Title>
                )}
              </AnimatePresence>
            </Styled.Wrapper>
          );
        }}
      </NavLink>
    </Styled.MenuItem>
  );
}
