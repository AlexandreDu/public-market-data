import type { UsePaginationProps } from '../../types';

import { useState, useCallback } from 'react';

export function usePagination<T>({ list }: UsePaginationProps<T>) {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = useCallback((pageNumber: number) => {
    setCurrentPage(pageNumber);
    if (window)
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
  }, []);

  let startIndex = currentPage * 20 - 20;
  const endIndex = startIndex + 20;
  if (list && startIndex > list.length) {
    startIndex = 0;
  }
  const rangeList = list && list.slice(startIndex, endIndex);

  return {
    currentPage,
    handlePageChange,
    rangeList,
  };
}
