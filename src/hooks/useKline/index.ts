import type { KlineResponse } from '../../types';

import { useState, useEffect, useMemo, useRef } from 'react';
import { subMonths } from 'date-fns';

import { getKline } from '../../apiRequests/kline';

export function useKline(symbol: string, interval: string) {
  const timerLoadingRef = useRef<NodeJS.Timeout | null>(null);

  const upperCaseSymbol = symbol.toUpperCase();
  const [kline, setKline] = useState<KlineResponse | null>(null);
  const [isLoadingKline, setIsLoadingKline] = useState(false);
  const [klineError, setKlineError] = useState<string | null>(null);

  const today = useMemo(() => {
    return new Date().getTime().toString();
  }, []);
  const dayOneMonthBefore = useMemo(() => {
    return subMonths(new Date(), 1).getTime().toString();
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    async function retrieveKline() {
      setIsLoadingKline(true);

      const { data: klineData, error: klineError } = await getKline({
        startTime: dayOneMonthBefore,
        endTime: today,
        interval,
        symbol: upperCaseSymbol,
        signal: controller.signal,
      });

      timerLoadingRef.current = setTimeout(() => {
        setIsLoadingKline(false);
      }, 1000);

      setKline(klineData);
      setKlineError(klineError);
    }
    retrieveKline();

    return () => {
      controller.abort();
      if (timerLoadingRef.current) clearTimeout(timerLoadingRef.current);
    };
  }, [upperCaseSymbol, interval, dayOneMonthBefore, today]);

  return { kline, klineError, isLoadingKline };
}
