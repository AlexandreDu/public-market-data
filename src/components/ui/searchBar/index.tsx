import type { SearchBarProps } from '../../../types';

import { useState } from 'react';

import * as Styled from './styles';
import { Input } from './input';
import { AutoComplete } from './autoComplete';

export function SearchBar({ fullList, handleSearch }: SearchBarProps) {
  const [query, setQuery] = useState('');

  const autoCompleteList =
    fullList && query && query.length > 0
      ? fullList
          .map((symbol) => symbol)
          .filter((symb) => {
            const newRegex = new RegExp(`^${query}`, 'i');
            return newRegex.test(symb);
          })
      : null;

  function resetQuery() {
    console.log('reset');
    setQuery('');
  }

  return (
    <Styled.SearchBar
      onSubmit={(e) => {
        e.preventDefault();
        handleSearch(query.toUpperCase());
      }}
    >
      <Input
        name="query"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {autoCompleteList && (
        <AutoComplete
          list={autoCompleteList}
          max={200}
          onClick={handleSearch}
          resetQuery={resetQuery}
        />
      )}
    </Styled.SearchBar>
  );
}
