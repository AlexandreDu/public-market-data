import type { RecentTradesTableProps } from '../../../types';

import { Table } from '../../ui/table';
import { TableHead } from '../../ui/table/tableHead';
import { TableBody } from '../../ui/table/tableBody';
import { TableRow } from '../../ui/table/tableRow';
import { HeadCell } from '../../ui/table/HeadCell';
import { DataCell } from '../../ui/table/DataCell';

import { strToFixed } from '../../../utils/strToFixed';

export function RecentTradesTable({ recentTrades }: RecentTradesTableProps) {
  const recentTradesHeadList = [
    'best match',
    'buyer maker',
    'price',
    'quantity',
    'quote quantity',
    'time',
  ].map((headElement) => <HeadCell key={headElement}>{headElement}</HeadCell>);

  const recentTradesBodyList = recentTrades?.map(
    ({ id, isBestMatch, isBuyerMaker, price, qty, quoteQty, time }) => {
      return (
        <TableRow key={id}>
          <DataCell>{isBestMatch ? 'Yes' : 'No'}</DataCell>
          <DataCell>{isBuyerMaker ? 'Yes' : 'No'}</DataCell>
          <DataCell>{strToFixed(price, 2)}</DataCell>
          <DataCell>{qty}</DataCell>
          <DataCell>{quoteQty}</DataCell>
          <DataCell>{time}</DataCell>
        </TableRow>
      );
    }
  );

  return (
    <Table>
      <TableHead>
        <TableRow>{recentTradesHeadList}</TableRow>
      </TableHead>
      <TableBody>{recentTradesBodyList}</TableBody>
    </Table>
  );
}
