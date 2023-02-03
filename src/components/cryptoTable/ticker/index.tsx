import type { TickerTableProps } from '../../../types';

import { Table } from '../../ui/table';
import { TableHead } from '../../ui/table/tableHead';
import { TableBody } from '../../ui/table/tableBody';
import { TableRow } from '../../ui/table/tableRow';
import { HeadCell } from '../../ui/table/HeadCell';
import { DataCell } from '../../ui/table/DataCell';
import { propertiesNames } from '../../../propertiesNames';

// component used for displaying ticker and ticker 24h data
export function TickerTable({ ticker }: TickerTableProps) {
  const tickerHeadList =
    ticker &&
    Object.keys(ticker).map((headElement, index) => {
      return (
        <HeadCell key={index}>
          {propertiesNames[headElement as keyof typeof propertiesNames] || ''}
        </HeadCell>
      );
    });
  const tickerBodyList =
    ticker &&
    Object.values(ticker).map((bodyElement, index) => {
      return <DataCell key={index}>{bodyElement}</DataCell>;
    });

  return (
    <Table>
      <TableHead>
        <TableRow>{tickerHeadList}</TableRow>
      </TableHead>
      <TableBody>
        <TableRow>{tickerBodyList}</TableRow>
      </TableBody>
    </Table>
  );
}
