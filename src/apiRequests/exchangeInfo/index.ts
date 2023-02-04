import type {
  GetAllCurrenciesPairsParams,
  EchangeInfoResponse,
} from '../../types';

import { handleRequest } from '../handleRequest';

export async function getAllCurrenciesPairs({
  signal,
}: GetAllCurrenciesPairsParams) {
  const { data, error } = await handleRequest<EchangeInfoResponse>({
    signal,
    url: '/exchangeInfo',
  });
  if (data) {
    const symbolsList = data.symbols.map(({ symbol }) => symbol);
    data.symbols;
    return { data: symbolsList, error };
  }
  return { data, error };
}
