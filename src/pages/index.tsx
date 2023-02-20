import { useTheme } from 'styled-components';

import { useCurrenciesPairs } from '../hooks/useCurrenciesPairs';
import { useTicker } from '../hooks/useTicker';
import { useTicker24h } from '../hooks/useTicker24h';
import { useRecentTrades } from '../hooks/useRecentTrades';

import { HomePageWrapper } from './styles';
import { Card } from '../components/ui/card';
import { TickerTable } from '../components/cryptoTable/ticker';
import { RecentTradesTable } from '../components/cryptoTable/recentTrades';

import { ThreeDots } from 'react-loader-spinner';

export function HomePage() {
  const theme = useTheme();

  // const { ticker, isLoadingTicker, tickerError, retrieveTicker } = useTicker();

  // const { ticker24h, isLoadingTicker24h, ticker24hError, retrieveTicker24h } =
  //   useTicker24h();

  // const {
  //   recentTrades,
  //   isLoadingRecentTrades,
  //   recentTradesError,
  //   retrieveRecentTrades,
  // } = useRecentTrades();

  return (
    <HomePageWrapper>
      {/* {!isLoadingTicker && ticker && (
        <Card title="Ticker">
          <TickerTable ticker={ticker} />
        </Card>
      )}
      {tickerError && <p>{tickerError}</p>}

      {!isLoadingTicker24h && ticker24h && (
        <Card title="Ticker 24h">
          <TickerTable ticker={ticker24h} />
        </Card>
      )}
      {ticker24hError && <p>{ticker24hError}</p>}

      {!isLoadingRecentTrades && recentTrades && (
        <Card title="Recent Trades">
          <RecentTradesTable recentTrades={recentTrades} />
        </Card>
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
      )} */}
    </HomePageWrapper>
  );
}
