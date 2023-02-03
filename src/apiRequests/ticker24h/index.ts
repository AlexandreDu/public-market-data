import type { GetTickerParams, Ticker24hResponse } from '../../types';

import { handleRequest } from '../handleRequest';

export async function getTicker24h({ symbol, signal }: GetTickerParams) {
  const { data, error } = await handleRequest<Ticker24hResponse>({
    params: { symbol },
    signal,
    url: '/ticker/24hr',
  });

  return { data, error };
}
