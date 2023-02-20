import type { DashboardProps } from '../../../types';

import { useTicker } from '../../../hooks/useTicker';
import { useTicker24h } from '../../../hooks/useTicker24h';
import { useKline } from '../../../hooks/useKline';
import { useRecentTrades } from '../../../hooks/useRecentTrades';

import { useTheme } from 'styled-components';

import * as Styled from './styles';

import { Card } from '../../../components/ui/card';
import { PriceCard } from '../../specificCards/priceCard';
import { Kline } from '../../../components/kline';

import { faCoins, faSignal } from '@fortawesome/free-solid-svg-icons';

import { strToFixed } from '../../../utils/strToFixed';
import { RecentTradesTable } from '../../../components/cryptoTable/recentTrades';
import { ThreeDots } from 'react-loader-spinner';

export function Dashboard({ symbol }: DashboardProps) {
  const theme = useTheme();

  const { ticker, isLoadingTicker, tickerError } = useTicker(symbol);

  const { ticker24h, isLoadingTicker24h, ticker24hError } =
    useTicker24h(symbol);

  const { kline, isLoadingKline } = useKline(symbol, '1d');

  const { recentTrades, isLoadingRecentTrades, recentTradesError } =
    useRecentTrades(symbol);

  // if there is / are error(s)
  const error = tickerError || ticker24hError || recentTradesError;
  if (error && error !== 'canceled') {
    return (
      <div style={{ alignSelf: 'center', margin: 'auto 0' }}>
        <p>{error}</p>
      </div>
    );
  }

  if (
    isLoadingTicker ||
    isLoadingTicker24h ||
    isLoadingRecentTrades ||
    isLoadingKline
  ) {
    return (
      <div style={{ alignSelf: 'center', margin: 'auto 0' }}>
        <ThreeDots
          height="80"
          width="80"
          radius="9"
          color={theme.colors.white}
          ariaLabel="three-dots-loading"
          visible={true}
        />
      </div>
    );
  }

  return (
    <>
      <Styled.Wrapper initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <Card title="Symbol" icon={faCoins}>
          <p style={{ fontSize: theme.fontSizes.lg }}>{ticker?.symbol}</p>
        </Card>

        {ticker24h && (
          <PriceCard
            title="Latest price"
            price={ticker24h.lastPrice}
            priceChangePercent={ticker24h.priceChangePercent}
            symbol={symbol}
          />
        )}

        <Card title="Quote volume" icon={faSignal}>
          <p style={{ fontSize: theme.fontSizes.lg }}>
            {ticker?.quoteVolume && strToFixed(ticker?.quoteVolume, 0)}
          </p>
        </Card>
        <Card title="Last month">{kline && <Kline data={kline} />}</Card>
        <Card title="Recent trades">
          {recentTrades && <RecentTradesTable recentTrades={recentTrades} />}
        </Card>
      </Styled.Wrapper>
    </>
  );
}
