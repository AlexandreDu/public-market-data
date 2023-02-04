import { useTheme } from 'styled-components';

import { useCurrenciesPairs } from '../hooks/useCurrenciesPairs';
import { useTicker } from '../hooks/useTicker';
import { useTicker24h } from '../hooks/useTicker24h';
import { useRecentTrades } from '../hooks/useRecentTrades';

import { HomePageWrapper } from './styles';
import { TickerTable } from '../components/cryptoTable/ticker';
import { RecentTradesTable } from '../components/cryptoTable/recentTrades';

import { ThreeDots } from 'react-loader-spinner';

import { SearchBar } from '../components/ui/searchBar';

export function HomePage() {
  const theme = useTheme();

  const { currenciesPairs } = useCurrenciesPairs();

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

  return (
    <HomePageWrapper>
      <SearchBar fullList={currenciesPairs} handleSearch={handleSearch} />

      {!isLoadingTicker && ticker && <TickerTable ticker={ticker} />}
      {tickerError && <p>{tickerError}</p>}

      {!isLoadingTicker24h && ticker24h && <TickerTable ticker={ticker24h} />}
      {ticker24hError && <p>{ticker24hError}</p>}

      {!isLoadingRecentTrades && recentTrades && (
        <RecentTradesTable recentTrades={recentTrades} />
      )}
      {recentTradesError && <p>{recentTradesError}</p>}

      {(isLoadingTicker || isLoadingTicker24h || isLoadingRecentTrades) && (
        <ThreeDots
          height="80"
          width="80"
          radius="9"
          color={theme.colors.white}
          ariaLabel="three-dots-loading"
          visible={true}
        />
      )}
    </HomePageWrapper>
  );
}
