import type { StrToFixed } from '../../types';

export const strToFixed: StrToFixed = (str, digit) => {
  return parseFloat(str).toFixed(digit);
};
