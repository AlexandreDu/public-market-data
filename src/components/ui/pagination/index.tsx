import type { PaginationProps } from '../../../types';

import * as Styled from './styles';
import { PaginationBox } from './paginationBox';

export function Pagination({
  totalCount,
  currentPage,
  handlePageChange,
}: PaginationProps) {
  const totalPagesCount = Math.ceil(totalCount / 20);

  const arr = new Array(totalPagesCount).fill(undefined);

  return (
    <Styled.Pagination>
      <Styled.WrapperPaginationBox>
        {arr.map((_, index) => {
          return (
            <PaginationBox
              key={index}
              pageNumber={index + 1}
              onClick={handlePageChange}
              isSelected={currentPage === index + 1}
            />
          );
        })}
      </Styled.WrapperPaginationBox>
    </Styled.Pagination>
  );
}
