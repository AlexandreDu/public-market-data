import type { GetTickerParams, TickerResponse } from '../../types';

import { handleRequest } from '../handleRequest';

export async function getTicker({ symbol, signal }: GetTickerParams) {
  const { data, error } = await handleRequest<TickerResponse>({
    params: { symbol },
    signal,
    url: '/ticker',
  });

  return { data, error };
}
