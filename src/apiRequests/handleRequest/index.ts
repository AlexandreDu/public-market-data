import type { HandleRequestParams } from '../../types';

import { binanceAPI } from '../config';
export async function handleRequest<T>({
  params,
  signal,
  url,
}: HandleRequestParams): Promise<{ data: T | null; error: string | null }> {
  try {
    const response = await binanceAPI.get<T>(url ? url : '', {
      signal,
      params,
    });

    const { data } = response;

    return { data, error: null };
  } catch (err) {
    if (err instanceof Error) {
      // handle the specific case of canceled request
      if (signal && signal.aborted) {
        return { data: null, error: 'canceled' };
      }
      return { data: null, error: err.message };
    }
    return { data: null, error: 'unknown error' };
  }
}
