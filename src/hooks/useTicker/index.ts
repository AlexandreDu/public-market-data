import type { TickerResponse } from '../../types';

import { useState } from 'react';
import { getTicker } from '../../apiRequests/ticker';

export function useTicker() {
  const [ticker, setTicker] = useState<TickerResponse | null>(null);
  const [isLoadingTicker, setIsLoadingTicker] = useState(false);
  const [tickerError, setTickerError] = useState<string | null>(null);

  async function retrieveTicker(symbol: string) {
    setIsLoadingTicker(true);
    const controller = new AbortController();
    const { data: tickerData, error: tickerDataError } = await getTicker({
      symbol,
      signal: controller.signal,
    });
    setIsLoadingTicker(false);
    setTicker(tickerData);
    setTickerError(tickerDataError);
  }
  return { ticker, tickerError, isLoadingTicker, retrieveTicker };
}
