import type { ExpandedContentProps } from '../../../../../../../types';

import { MenuItem } from '../../menuItem';
import { MenuItemWithExpand } from '../index';

const resolveLinkPath = (parentTo: string, childTo: string) =>
  `${parentTo}/${childTo}`;

export function ExpandedContent({ descendant, to }: ExpandedContentProps) {
  return (
    <div>
      {descendant.map(
        ({ label: childLabel, to: childTo, descendant: childDescendant }) => {
          const path = resolveLinkPath(to, childTo);

          const level = (path.match(/\//g)?.length as number) - 1;

          if (childDescendant)
            return (
              <MenuItemWithExpand
                level={level}
                label={childLabel}
                to={path}
                descendant={childDescendant}
              />
            );
          return (
            <MenuItem
              key={childLabel}
              level={level}
              label={childLabel}
              to={path}
            />
          );
        }
      )}
    </div>
  );
}
