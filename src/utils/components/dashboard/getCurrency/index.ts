export function getCurrency({ symbol }: { symbol: string }) {
  if (/eur$/i.test(symbol)) return '€';
  if (/usdt$/i.test(symbol)) return '$';
  return '';
}
