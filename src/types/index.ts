import type { AxiosRequestConfig } from 'axios';
import { theme } from '../styles/themes';

export type Theme = typeof theme;

export type HandleRequestParams = AxiosRequestConfig;

export type CurrencyPair = {
  symbol: string;
  baseAsset: string;
  quoteAsset: string;
};
export type EchangeInfoResponse = {
  symbols: CurrencyPair[];
};

export type TickerResponse = {
  closeTime: number;
  count: number;
  firstId: number;
  highPrice: string;
  lastId: number;
  lastPrice: string;
  lowPrice: string;
  openPrice: string;
  openTime: number;
  priceChange: string;
  priceChangePercent: string;
  quoteVolume: string;
  symbol: string;
  volume: string;
  weightedAvgPrice: string;
};

export type Ticker24hResponse = TickerResponse & {
  prevClosePrice: string;
  askPrice: string;
  askQty: string;
  bidPrice: string;
  bidQty: string;
  lastQty: string;
};

export type RecentTradesResponse = {
  id: number;
  price: string;
  qty: string;
  quoteQty: string;
  time: number;
  isBuyerMaker: boolean;
  isBestMatch: boolean;
}[];

export type GetAllCurrenciesPairsParams = {
  signal: AbortSignal;
};

export type GetTickerParams = {
  symbol: string;
  signal: AbortSignal;
};

export type GetRecentTradesParams = GetTickerParams;

// ui components

export type SearchBarProps = {
  fullList: string[] | null;
  handleSearch: (str: string) => void;
};

export type AutoCompleteProps = {
  list: string[];
  resetQuery: () => void;
  max: number;
  onClick: (str: string) => void;
};

export type InputProps = React.ComponentPropsWithRef<'input'>;

export type TableProps = React.PropsWithChildren;

export type TableHeadProps = React.PropsWithChildren;

export type TableBodyProps = React.PropsWithChildren;

export type TableRowProps = React.PropsWithChildren;

export type HeadCellProps = React.PropsWithChildren;

export type DataCellProps = React.PropsWithChildren;

// components
export type ThemesProviderProps = React.PropsWithChildren;

export type TickerTableProps = {
  ticker: TickerResponse | Ticker24hResponse;
};

export type RecentTradesTableProps = {
  recentTrades: RecentTradesResponse;
};

export type LayoutProps = React.PropsWithChildren;

// hooks
export type UseSortProps<T> = {
  list: T[];
  sortDirection: 'asc' | 'desc' | 'none';
};

// utils
export type StrToFixed = (str: string, digit: number) => string;
