import type { Ticker24hResponse } from '../../types';

import { useState } from 'react';
import { getTicker24h } from '../../apiRequests/ticker24h';

export function useTicker24h() {
  const [ticker24h, setTicker24h] = useState<Ticker24hResponse | null>(null);
  const [isLoadingTicker24h, setIsLoadingTicker24h] = useState(false);
  const [ticker24hError, setTicker24hError] = useState<string | null>(null);

  async function retrieveTicker24h(symbol: string) {
    setIsLoadingTicker24h(true);
    const controller = new AbortController();
    const { data: ticker24hData, error: ticker24hDataError } =
      await getTicker24h({
        symbol,
        signal: controller.signal,
      });
    setIsLoadingTicker24h(false);
    setTicker24h(ticker24hData);
    setTicker24hError(ticker24hDataError);
  }
  return { ticker24h, ticker24hError, isLoadingTicker24h, retrieveTicker24h };
}
