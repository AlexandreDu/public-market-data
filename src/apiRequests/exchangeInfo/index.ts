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

// try {
//   const response = await binanceAPI.get<EchangeInfoResponse>(
//     `/exchangeInfo`,
//     {
//       signal,
//     }
//   );

//   const {
//     data: { symbols },
//   } = response;

//   return { data: symbols, error: null };
// } catch (err) {
//   if (err instanceof Error) {
//     // handle the specific case of canceled request
//     if (signal.aborted) {
//       return { data: [], error: 'canceled' };
//     }
//     return { data: [], error: err.message };
//   }
//   return { data: [], error: 'unknown error' };
// }
