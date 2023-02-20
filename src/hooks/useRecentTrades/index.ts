import type { RecentTrades } from '../../types';

import { useState, useEffect } from 'react';
import { getRecentTrades } from '../../apiRequests/recentTrades';

export function useRecentTrades(symbol: string) {
  const upperCaseSymbol = symbol.toUpperCase();
  const [recentTrades, setRecentTrades] = useState<RecentTrades | null>(null);
  const [isLoadingRecentTrades, setIsLoadingRecentTrades] = useState(false);
  const [recentTradesError, setRecentTradesError] = useState<string | null>(
    null
  );

  useEffect(() => {
    async function retrieveRecentTrades() {
      setIsLoadingRecentTrades(true);
      const controller = new AbortController();
      const { data: recentTradesData, error: rentTradesDataError } =
        await getRecentTrades({
          symbol: upperCaseSymbol,
          signal: controller.signal,
        });
      setIsLoadingRecentTrades(false);
      // converting the type of price, qty and quotQty to number (in order to avoid issues when sorting with useSort later)
      let recentTradesConverted;
      if (recentTradesData) {
        recentTradesConverted = recentTradesData.map(
          ({ price, qty, quoteQty, ...rest }) => {
            return {
              ...rest,
              price: parseFloat(price),
              qty: parseFloat(qty),
              quoteQty: parseFloat(quoteQty),
            };
          }
        );
      }
      setRecentTrades(recentTradesConverted || null);
      setRecentTradesError(rentTradesDataError);
    }
    retrieveRecentTrades();
  }, [upperCaseSymbol]);

  return {
    recentTrades,
    recentTradesError,
    isLoadingRecentTrades,
  };
}
