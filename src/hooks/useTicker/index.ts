import type { TickerResponse } from '../../types';

import { useState, useEffect } from 'react';
import { getTicker } from '../../apiRequests/ticker';

export function useTicker(symbol: string) {
  const upperCaseSymbol = symbol.toUpperCase();
  const [ticker, setTicker] = useState<TickerResponse | null>(null);
  const [isLoadingTicker, setIsLoadingTicker] = useState(false);
  const [tickerError, setTickerError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    async function retrieveTicker() {
      setIsLoadingTicker(true);

      const { data: tickerData, error: tickerDataError } = await getTicker({
        symbol: upperCaseSymbol,
        signal: controller.signal,
      });
      setIsLoadingTicker(false);
      setTicker(tickerData);
      setTickerError(tickerDataError);
    }
    retrieveTicker();

    return () => controller.abort();
  }, [upperCaseSymbol]);

  return { ticker, tickerError, isLoadingTicker };
}
