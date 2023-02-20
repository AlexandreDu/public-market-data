import type { SearchBarProps } from '../../../types';

import { useState } from 'react';

import { useTheme } from 'styled-components';

import * as Styled from './styles';
import { Input } from './input';
import { AutoComplete } from './autoComplete';
import { Icon } from '../icon';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

export function SearchBar({ fullList, handleSearch }: SearchBarProps) {
  const theme = useTheme();

  const [query, setQuery] = useState('');

  const autoCompleteList =
    fullList &&
    query &&
    fullList.filter((symb) => {
      const newRegex = new RegExp(`^${query}`, 'i');
      return newRegex.test(symb);
    });

  function resetQuery() {
    setQuery('');
  }

  return (
    <Styled.SearchBar
      onSubmit={(e) => {
        e.preventDefault();
        setQuery('');
        handleSearch(query.toUpperCase());
      }}
    >
      <Styled.InputIconWrapper>
        <Icon icon={faMagnifyingGlass} size={'xl'} color={theme.colors.white} />
        <Input
          name="query"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search a crypto pair"
          type="text"
        />
      </Styled.InputIconWrapper>
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
