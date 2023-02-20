import * as Styled from './styles';
import { MenuItem } from './menuItem';
import { MenuItemWithExpand } from './menuItemWithExpand';

import { sideMenuContent } from '../../../../../content/sidebar';

export function Menu() {
  return (
    <Styled.Menu>
      {sideMenuContent.map(({ label, icon, to, descendant }, index) => {
        if (descendant) {
          return (
            <MenuItemWithExpand
              key={index}
              level={1}
              label={label}
              to={to}
              icon={icon}
              descendant={descendant}
            />
          );
        }
        return (
          <MenuItem key={index} level={1} label={label} to={to} icon={icon} />
        );
      })}
    </Styled.Menu>
  );
}
