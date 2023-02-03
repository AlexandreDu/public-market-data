import { Icon } from '../../../components/ui/icon';

import { ArrowUp, ArrowDown } from '../../../components/ui/icon/arrow';
export function getSortIcon(
  sortedFields: string[],
  sortDirections: string[],
  field: string
) {
  const fieldIndex = sortedFields.indexOf(field);
  let sortIcon: React.ReactElement<typeof Icon> | null = null;
  if (fieldIndex !== -1) {
    sortDirections[fieldIndex] === 'asc'
      ? (sortIcon = <ArrowUp />)
      : (sortIcon = <ArrowDown />);
  }
  if (fieldIndex === -1) sortIcon = null;

  return sortIcon;
}
