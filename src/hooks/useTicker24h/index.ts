import type { Ticker24hResponse } from '../../types';

import { useState, useEffect } from 'react';
import { getTicker24h } from '../../apiRequests/ticker24h';

export function useTicker24h(symbol: string) {
  const upperCaseSymbol = symbol.toUpperCase();
  const [ticker24h, setTicker24h] = useState<Ticker24hResponse | null>(null);
  const [isLoadingTicker24h, setIsLoadingTicker24h] = useState(false);
  const [ticker24hError, setTicker24hError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    async function retrieveTicker24h() {
      setIsLoadingTicker24h(true);

      const { data: ticker24hData, error: ticker24hDataError } =
        await getTicker24h({
          symbol: upperCaseSymbol,
          signal: controller.signal,
        });
      setIsLoadingTicker24h(false);
      setTicker24h(ticker24hData);
      setTicker24hError(ticker24hDataError);
    }

    retrieveTicker24h();

    return () => controller.abort();
  }, [upperCaseSymbol]);

  return { ticker24h, ticker24hError, isLoadingTicker24h };
}
