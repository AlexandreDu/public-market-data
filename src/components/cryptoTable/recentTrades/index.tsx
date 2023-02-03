import type { RecentTradesTableProps } from '../../../types';

import { useSort } from '../../../hooks/useSort';

import { Table } from '../../ui/table';
import { TableHead } from '../../ui/table/tableHead';
import { TableBody } from '../../ui/table/tableBody';
import { TableRow } from '../../ui/table/tableRow';
import { HeadCell } from '../../ui/table/HeadCell';
import { DataCell } from '../../ui/table/DataCell';

import { propertiesNames } from '../../../propertiesNames';

import { timestampToStr } from '../../../utils/timestampToStr';

import { getSortIcon } from '../../../utils/components/recentTradesTable';

export function RecentTradesTable({ recentTrades }: RecentTradesTableProps) {
  const recentTradesHeadList: JSX.Element[] = [];
  const recentTradesBodyList: JSX.Element[] = [];

  const {
    sortedList,
    handleClick,
    fields: sortedFields,
    sortDirections,
  } = useSort({ list: recentTrades });

  // recentTrades is an array, we use .entries to get an index in order to push only one time the header items
  for (const [index, trade] of sortedList.entries()) {
    if (index === 0) {
      for (const prop in trade) {
        let enableSort = false;
        // we attach the onClick for sorting on CellHead time, price, quantity and quote quantity
        if (
          prop === 'time' ||
          prop === 'price' ||
          prop === 'qty' ||
          prop === 'quoteQty'
        ) {
          enableSort = true;
        }

        const sortIcon = getSortIcon(sortedFields, sortDirections, prop);

        recentTradesHeadList.push(
          <HeadCell
            key={prop + index}
            {...(enableSort ? { onClick: () => handleClick(prop) } : {})}
            style={{ cursor: enableSort ? 'pointer' : 'auto' }}
            {...(sortIcon ? { icon: sortIcon } : {})}
          >
            {propertiesNames[prop as keyof typeof propertiesNames]}
            {sortIcon}
          </HeadCell>
        );
      }
    }
    const bodyRowItems: JSX.Element[] = [];
    for (const prop in trade) {
      let specificItem = '';

      if (trade[prop as keyof typeof trade] === true) specificItem = 'Yes';
      if (trade[prop as keyof typeof trade] === false) specificItem = 'No';
      if (prop === 'time') {
        specificItem = timestampToStr(trade[prop]);
      }

      bodyRowItems.push(
        <DataCell key={prop + trade[prop as keyof typeof trade]}>
          {specificItem || trade[prop as keyof typeof trade]}
        </DataCell>
      );
    }
    recentTradesBodyList.push(<TableRow key={index}>{bodyRowItems}</TableRow>);
  }

  return (
    <Table>
      <TableHead>
        <TableRow>{recentTradesHeadList}</TableRow>
      </TableHead>
      <TableBody>{recentTradesBodyList}</TableBody>
    </Table>
  );
}
