import type { CardProps } from '../../../types';
import { Icon } from '../icon';
import * as Styled from './styles';

export function Card({ children, title, icon }: CardProps) {
  return (
    <Styled.Card>
      {title && (
        <Styled.CardHeader>
          <Styled.CardTitle>{title}</Styled.CardTitle>
          {icon && <Icon icon={icon} size="2x" />}
        </Styled.CardHeader>
      )}
      <Styled.CardContent>{children}</Styled.CardContent>
    </Styled.Card>
  );
}
