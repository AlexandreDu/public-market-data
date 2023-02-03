import { useTheme } from 'styled-components';

import { useCurrenciesPairs } from '../hooks/useCurrenciesPairs';
import { useTicker } from '../hooks/useTicker';
import { useTicker24h } from '../hooks/useTicker24h';
import { useRecentTrades } from '../hooks/useRecentTrades';

import { TableRow } from '../components/ui/table/tableRow';
import { HeadCell } from '../components/ui/table/HeadCell';
import { DataCell } from '../components/ui/table/DataCell';

import { ThreeDots } from 'react-loader-spinner';
import { strToFixed } from '../utils/strToFixed';

import { propertiesNames } from '../propertiesNames';

import { SearchBar } from '../components/ui/searchBar';
import { Table } from '../components/ui/table';
import { TableHead } from '../components/ui/table/tableHead';
import { TableBody } from '../components/ui/table/tableBody';

export function HomePage() {
  const theme = useTheme();

  const { currenciesPairs, error } = useCurrenciesPairs();

  const { ticker, isLoadingTicker, tickerError, retrieveTicker } = useTicker();

  const { ticker24h, isLoadingTicker24h, ticker24hError, retrieveTicker24h } =
    useTicker24h();

  const {
    recentTrades,
    isLoadingRecentTrades,
    recentTradesError,
    retrieveRecentTrades,
  } = useRecentTrades();

  function handleSearch(symbol: string) {
    retrieveTicker(symbol);
    retrieveTicker24h(symbol);
    retrieveRecentTrades(symbol);
  }

  console.log(ticker, ticker24h, recentTrades);

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

  // const ticker24hHeadList = ticker24h && Object.keys(ticker24h);
  // const ticker24hBodyList = ticker24h && Object.values(ticker24h);

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
    <>
      <SearchBar fullList={currenciesPairs} handleSearch={handleSearch} />
      {tickerHeadList && tickerBodyList && (
        <Table>
          <TableHead>
            <TableRow>{tickerHeadList}</TableRow>
          </TableHead>
          <TableBody>
            <TableRow>{tickerBodyList}</TableRow>
          </TableBody>
        </Table>
      )}
      {isLoadingRecentTrades ? (
        <ThreeDots
          height="80"
          width="80"
          radius="9"
          color={theme.colors.white}
          ariaLabel="three-dots-loading"
          // wrapperClassName=""
          visible={true}
        />
      ) : (
        recentTradesHeadList &&
        recentTradesBodyList && (
          <Table>
            <TableHead>
              <TableRow>{recentTradesHeadList}</TableRow>
            </TableHead>
            <TableBody>{recentTradesBodyList}</TableBody>
          </Table>
        )
      )}
    </>
  );
}
