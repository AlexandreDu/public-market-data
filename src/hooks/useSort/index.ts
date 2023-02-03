import type { UseSortProps } from '../../types';
import { useState } from 'react';
import { orderBy } from 'lodash';

export function useSort<T>({ list }: UseSortProps<T>): {
  sortedList: T[];
  handleClick: (fieldName: string) => void;
} {
  const [fields, setFields] = useState<string[]>([]);
  const [sortDirections, setDirections] = useState<('asc' | 'desc')[]>([]);

  function handleClick(fieldName: string) {
    const index = fields.indexOf(fieldName);
    // if the field does not exist, we add it and we set 'asc'
    if (index === -1) {
      setFields((prevState) => {
        return [...prevState, fieldName];
      });
      setDirections((prevState) => {
        return [...prevState, 'asc'];
      });
    }
    // if the field already exists
    if (index !== -1) {
      //  if the sortDirection is asc, we set it to desc
      if (sortDirections[index] === 'asc') {
        setDirections((prevState) => {
          return replaceItem(index, 'desc', prevState);
        });
      }
      //  if the sortDirection is desc, we remove it
      if (sortDirections[index] === 'desc') {
        setFields((prevState) => removeItem(index, prevState));
        setDirections((prevState) => {
          return removeItem(index, prevState);
        });
      }
    }
  }

  const sortedList = orderBy(list, fields, sortDirections);

  // orderBy creates a new array
  return { sortedList, handleClick };
}

function removeItem<T>(index: number, arr: T[]): T[] {
  const copy = [...arr];
  copy.splice(index, 1);
  return copy;
}

function replaceItem<T>(index: number, newValue: T, arr: T[]): T[] {
  const copy = [...arr];
  copy.splice(index, 1, newValue);

  return copy;
}
