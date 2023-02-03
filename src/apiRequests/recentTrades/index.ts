import type { GetRecentTradesParams, RecentTradesResponse } from '../../types';

import { handleRequest } from '../handleRequest';

export async function getRecentTrades({
  symbol,
  signal,
}: GetRecentTradesParams) {
  const { data, error } = await handleRequest<RecentTradesResponse>({
    params: { symbol },
    signal,
    url: '/trades',
  });

  return { data, error };
}
