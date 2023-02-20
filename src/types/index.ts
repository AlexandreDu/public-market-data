import type { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import type { AxiosRequestConfig } from 'axios';
import { theme } from '../styles/themes';

import type { MotionProps } from 'framer-motion';
import type { IconProp } from '@fortawesome/fontawesome-svg-core';

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

export type RecentTrades = {
  id: number;
  price: number;
  qty: number;
  quoteQty: number;
  time: number;
  isBuyerMaker: boolean;
  isBestMatch: boolean;
}[];

export type KlineResponse = [
  number,
  string,
  string,
  string,
  string,
  string,
  number,
  string,
  number,
  string,
  string,
  string
][];

type Signal = { signal: AbortSignal };
type Symb = { symbol: string };

// requests
export type GetAllCurrenciesPairsParams = Signal;

export type GetTickerParams = Symb & Signal;

export type GetRecentTradesParams = GetTickerParams;

export type GetKlineParams = Symb &
  Signal & {
    interval: string;
    startTime: string;
    endTime: string;
  };

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

export type HeadCellProps = React.PropsWithChildren<
  React.ComponentPropsWithoutRef<'th'>
>;

export type DataCellProps = React.PropsWithChildren<
  React.ComponentPropsWithoutRef<'td'>
>;

export type IconProps = FontAwesomeIconProps & MotionProps;

export type HamburgerIconProps = MotionProps;

export type ArrowProps = Omit<IconProps, 'icon'>;

export type PaginationProps = {
  totalCount: number;
  currentPage: number;
  handlePageChange: (pageNumber: number) => void;
};

export type PaginationBoxProps = {
  pageNumber: number;
  isSelected: boolean;
  onClick: (pageNumber: number) => void;
};

export type CardProps = React.PropsWithChildren<{
  title?: string;
  icon?: IconProp;
}>;

export type DashboardProps = Symb;

export type AnimatedPageProps = React.PropsWithChildren;

// components
export type ThemesProviderProps = React.PropsWithChildren;

export type SidebarProviderProps = React.PropsWithChildren;

export type TickerTableProps = {
  ticker: TickerResponse | Ticker24hResponse;
};

export type RecentTradesTableProps = {
  recentTrades: RecentTrades;
};

export type KlineProps = {
  data: KlineResponse;
};

export type LayoutProps = React.PropsWithChildren;

export type MainProps = React.PropsWithChildren;

export type MenuItemProps = {
  level?: number;
  label: string;
  icon?: IconProp;
  to: string;
};

export type MenuItemWithExpandProps = Pick<
  MenuItemProps,
  'label' | 'icon' | 'to' | 'level'
> & { descendant?: MenuItemWithExpandProps[] };

// ExpandedContent within MenuItemWithExpandProps
export type ExpandedContentProps = {
  descendant: MenuItemWithExpandProps[];
} & Pick<MenuItemProps, 'to'>;

export type PriceCardProps = Symb & {
  title: string;
  price: string;
  priceChangePercent: string;
};

// hooks
export type UseSortProps<T> = {
  list: T[];
};

export type UsePaginationProps<T> = {
  list: T[];
};

// utils
export type StrToFixed = (str: string, digit: number) => string;

export type GetSortIconProps = {
  sortedFields: string[];
  sortDirections: string[];
  field: string;
};
