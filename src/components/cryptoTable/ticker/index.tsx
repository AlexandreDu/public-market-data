import type { TickerTableProps } from '../../../types';

import { Table } from '../../ui/table';
import { TableHead } from '../../ui/table/tableHead';
import { TableBody } from '../../ui/table/tableBody';
import { TableRow } from '../../ui/table/tableRow';
import { HeadCell } from '../../ui/table/HeadCell';
import { DataCell } from '../../ui/table/DataCell';

import { propertiesNames } from '../../../propertiesNames';
import { timestampToStr } from '../../../utils/timestampToStr';

// component used for displaying ticker and ticker 24h data
export function TickerTable({ ticker }: TickerTableProps) {
  const tickerHeadList: JSX.Element[] = [];
  const tickerBodyList: JSX.Element[] = [];

  for (const [index, [key, value]] of Object.entries(ticker).entries()) {
    tickerHeadList.push(
      <HeadCell key={index + key}>
        {propertiesNames[key as keyof typeof propertiesNames] || ''}
      </HeadCell>
    );
    let isTimestampData = false;
    if (key.toLowerCase().includes('time')) {
      isTimestampData = true;
    }
    // ajouter fonction pour rajouter couleur et + sur les pourcentages
    tickerBodyList.push(
      <DataCell key={index + key + value}>
        {isTimestampData
          ? timestampToStr(
              typeof value === 'string' ? parseInt(value, 10) : value
            )
          : value}
      </DataCell>
    );
  }

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
