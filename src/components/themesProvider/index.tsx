import { ThemesProviderProps } from '../../types';

import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../../styles/global';
import { theme } from '../../styles/themes';

export function ThemesProvider({ children }: ThemesProviderProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </>
  );
}
