import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Root } from '~/pages';
import { ThemeContextProvider } from '~/shared/services/ThemeContextHandler';

import './styles/main.scss';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeContextProvider>
      <Root />
    </ThemeContextProvider>
  </StrictMode>
)