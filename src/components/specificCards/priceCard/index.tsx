import type { PriceCardProps } from '../../../types';
import { useTheme } from 'styled-components';
import { Card } from '../../ui/card';

import { faEuro } from '@fortawesome/free-solid-svg-icons';

import { strToFixed } from '../../../utils/strToFixed';
import { getCurrency } from '../../../utils/components/dashboard/getCurrency';

export function PriceCard({
  title,
  price,
  priceChangePercent,
  symbol,
}: PriceCardProps) {
  const theme = useTheme();

  return (
    <Card title={title} icon={faEuro}>
      <>
        <span style={{ fontSize: theme.fontSizes.lg }}>
          <span>{strToFixed(price, 2)}</span>
          <span> {getCurrency({ symbol })}</span>
        </span>
        <div>
          <span
            style={{
              color:
                parseFloat(priceChangePercent) > 0
                  ? theme.colors.lightGreen
                  : 'red',
            }}
          >
            {strToFixed(priceChangePercent, 2)}%
          </span>
          <span style={{ color: theme.colors.grey }}> since 24h</span>
        </div>
      </>
    </Card>
  );
}
