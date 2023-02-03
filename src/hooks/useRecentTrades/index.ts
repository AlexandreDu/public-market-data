import type { RecentTradesResponse } from '../../types';

import { useState } from 'react';
import { getRecentTrades } from '../../apiRequests/recentTrades';

export function useRecentTrades() {
  const [recentTrades, setRecentTrades] = useState<RecentTradesResponse | null>(
    null
  );
  const [isLoadingRecentTrades, setIsLoadingRecentTrades] = useState(false);
  const [recentTradesError, setRecentTradesError] = useState<string | null>(
    null
  );

  async function retrieveRecentTrades(symbol: string) {
    setIsLoadingRecentTrades(true);
    const controller = new AbortController();
    const { data: recentTradesData, error: rentTradesDataError } =
      await getRecentTrades({
        symbol,
        signal: controller.signal,
      });
    setIsLoadingRecentTrades(false);
    setRecentTrades(recentTradesData);
    setRecentTradesError(rentTradesDataError);
  }
  return {
    recentTrades,
    recentTradesError,
    isLoadingRecentTrades,
    retrieveRecentTrades,
  };
}
