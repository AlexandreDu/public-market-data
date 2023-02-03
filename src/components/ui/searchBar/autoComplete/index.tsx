import * as Styled from './styles';
import { AutoCompleteProps } from '../../../../types';

export function AutoComplete({
  list,
  max,
  onClick,
  resetQuery,
}: AutoCompleteProps) {
  const limitedList = list.slice(0, max);
  return (
    <Styled.AutoComplete>
      {limitedList.map((element) => (
        <p
          key={element}
          onClick={() => {
            resetQuery();
            onClick(element);
          }}
        >
          {element}
        </p>
      ))}
    </Styled.AutoComplete>
  );
}
