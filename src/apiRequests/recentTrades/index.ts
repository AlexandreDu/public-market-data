import type { GetRecentTradesParams, RecenTradesResponse } from '../../types';

import { handleRequest } from '../handleRequest';

export async function getRecentTrades({
  symbol,
  signal,
}: GetRecentTradesParams) {
  const { data, error } = await handleRequest<RecenTradesResponse>({
    params: { symbol },
    signal,
    url: '/trades',
  });

  return { data, error };
}
