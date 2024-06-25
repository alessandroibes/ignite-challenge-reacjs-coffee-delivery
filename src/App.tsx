import { ThemeProvider } from 'styled-components';

import { defaultTheme } from './styles/themes/default';
import { GlobalStyle } from './styles/global';
import { Home } from './pages/Home';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <div className="mainHeader">
        <div>Logo</div>

        <div>
          <span>Porto Alegre, RS</span>

          <span>Carrinho</span>
        </div>
      </div>

      <main className="mainContent">
        <Home />
      </main>
    </ThemeProvider>
  );
}
