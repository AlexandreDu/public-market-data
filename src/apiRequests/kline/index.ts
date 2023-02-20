import type { GetKlineParams, KlineResponse } from '../../types';

import { handleRequest } from '../handleRequest';

export async function getKline({
  symbol,
  interval,
  startTime,
  endTime,
  signal,
}: GetKlineParams) {
  const { data, error } = await handleRequest<KlineResponse>({
    params: { symbol, interval, startTime, endTime },
    signal,
    url: '/uiKlines',
  });

  return { data, error };
}
