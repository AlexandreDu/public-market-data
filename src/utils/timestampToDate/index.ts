import { fromUnixTime } from 'date-fns';

export function timestampToDate(timestamp: number) {
  return fromUnixTime(timestamp * 0.001);
}
