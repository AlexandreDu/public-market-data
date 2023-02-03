import { useState, useEffect } from 'react';
import { getAllCurrenciesPairs } from '../../apiRequests/exchangeInfo';

export function useCurrenciesPairs() {
  const [currenciesPairs, setCurrenciesPairs] = useState<string[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const controller = new AbortController();
    async function getAllPairsSymbols() {
      setIsLoading(true);
      const { data, error } = await getAllCurrenciesPairs({
        signal: controller.signal,
      });
      setIsLoading(false);

      setCurrenciesPairs(data);
      if (error) setError(error);
    }
    getAllPairsSymbols();
    return () => controller.abort();
  }, []);

  return { currenciesPairs, error };
}
