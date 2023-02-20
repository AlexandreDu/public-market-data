import type { MenuItemWithExpandProps } from '../../../../../../types';

import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import { useSidebar } from '../../../../../../hooks/context/sidebar';

import { useTheme } from 'styled-components';
import * as Styled from './styles';
import { MenuItem } from '../menuItem';
import { ArrowDown } from '../../../../../ui/icon/arrow';
import { ExpandedContent } from './expandedContent';

export function MenuItemWithExpand({
  level,
  label,
  icon,
  to,
  descendant,
}: MenuItemWithExpandProps) {
  const theme = useTheme();
  const [isExpanded, setIsExpanded] = useState(false);

  const { isSidebarExpanded } = useSidebar();
  // all level 1 menuItemHeader should be render
  return level === 1 || isSidebarExpanded ? (
    <Styled.MenuItemWithExpand>
      <Styled.Wrapper>
        <MenuItem level={level} label={label} icon={icon} to={to} />
        <AnimatePresence>
          {isSidebarExpanded && (
            <ArrowDown
              style={{ marginLeft: 'auto' }}
              key={label}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: theme.transitions.sm }}
              onClick={() => setIsExpanded((prev) => !prev)}
            />
          )}
        </AnimatePresence>
      </Styled.Wrapper>

      {isSidebarExpanded && isExpanded && descendant && (
        <ExpandedContent descendant={descendant} to={to} />
      )}
    </Styled.MenuItemWithExpand>
  ) : null;
}
