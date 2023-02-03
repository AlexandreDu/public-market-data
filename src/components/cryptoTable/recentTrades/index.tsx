import type { RecentTradesTableProps } from '../../../types';

import { Table } from '../../ui/table';
import { TableHead } from '../../ui/table/tableHead';
import { TableBody } from '../../ui/table/tableBody';
import { TableRow } from '../../ui/table/tableRow';
import { HeadCell } from '../../ui/table/HeadCell';
import { DataCell } from '../../ui/table/DataCell';

import { strToFixed } from '../../../utils/strToFixed';

import { propertiesNames } from '../../../propertiesNames';

export function RecentTradesTable({ recentTrades }: RecentTradesTableProps) {
  const recentTradesHeadList = [];
  const recentTradesBodyList = [];

  // recentTrades is an array, we use .entries to get an index
  for (const [index, trade] of recentTrades.entries()) {
    if (index === 0) {
      for (const prop in trade) {
        recentTradesHeadList.push(
          <HeadCell key={trade.id}>
            {propertiesNames[prop as keyof typeof propertiesNames]}
          </HeadCell>
        );
      }
    }
    const bodyRow: JSX.Element[] = [];
    for (const prop in trade) {
      bodyRow.push(<DataCell>{trade[prop as keyof typeof trade]}</DataCell>);
    }
    recentTradesBodyList.push(<TableRow key={index}>{bodyRow}</TableRow>);
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
