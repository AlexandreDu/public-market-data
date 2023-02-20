import type { LayoutProps } from '../../types';

import { useNavigate } from 'react-router-dom';

import { useCurrenciesPairs } from '../../hooks/useCurrenciesPairs';

import * as Styled from './styles';
import { SidebarProvider } from '../sidebarProvider';
import { Header } from './header';
import { SearchBar } from '../ui/searchBar';
import { Main } from './main';

export function Layout({ children }: LayoutProps) {
  const navigate = useNavigate();

  const { currenciesPairs } = useCurrenciesPairs();

  function handleSearch(symbol: string) {
    if (symbol) navigate(`/specific/${symbol}`);
  }

  return (
    <Styled.Layout>
      <SidebarProvider>
        <Styled.Wrapper>
          <Header />
          <Main>
            <SearchBar fullList={currenciesPairs} handleSearch={handleSearch} />
            {children}
          </Main>
        </Styled.Wrapper>
      </SidebarProvider>
    </Styled.Layout>
  );
}
