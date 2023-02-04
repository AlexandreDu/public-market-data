import type { PaginationBoxProps } from '../../../../types';

import * as Styled from './styles';
export const PaginationBox = ({
  pageNumber,
  isSelected,
  onClick,
}: PaginationBoxProps) => {
  return (
    <Styled.PaginationBox
      onClick={() => onClick(pageNumber)}
      isSelected={isSelected}
    >
      <span>{pageNumber}</span>
    </Styled.PaginationBox>
  );
};
