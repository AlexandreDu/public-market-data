import { fromUnixTime, format } from 'date-fns';

export function timestampToStr(timestamp: number): string {
  // fromUnixTime expect a timestamp in seconds and binance api returns a timestamp in ms
  const date = fromUnixTime(timestamp * 0.001);
  return format(date, 'dd/MM/yyyy');
}
