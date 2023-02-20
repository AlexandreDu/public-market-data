import type { KlineProps } from '../../types';

import { useTheme } from 'styled-components';

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from 'recharts';

import { timestampToDate } from '../../utils/timestampToDate/index';

export function Kline({ data }: KlineProps) {
  const theme = useTheme();

  const chartData = [];

  let min = 999999999;
  let max = 0;

  for (const [
    openTime,
    openPrice,
    highPrice,
    lowPrice,
    closePrice,
    volume,
    closeTime,
    quoteAssetVolume,
    tradesNumber,
    takerBuyBaseAssetVolume,
    takerBuyQuoteAssetVolume,
  ] of data) {
    const numberClosePrice = parseFloat(closePrice);

    if (numberClosePrice < min) {
      min = numberClosePrice;
    }
    if (numberClosePrice > max) {
      max = numberClosePrice;
    }
    chartData.push({
      date: timestampToDate(closeTime).toISOString().substring(0, 10),
      value: closePrice,
    });
  }

  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={chartData}>
        <Area
          dataKey="value"
          stroke={theme.colors.lightGreen}
          strokeWidth="2px"
          fill={theme.colors.darkBlue}
        />
        <XAxis dataKey="date" />
        <YAxis dataKey="value" domain={[min, max]} />
        <Tooltip
          wrapperStyle={{ color: theme.colors.darkBlue }}
          itemStyle={{ color: theme.colors.darkBlue }}
        />
        <CartesianGrid opacity={0.1} />
      </AreaChart>
    </ResponsiveContainer>
  );
}
