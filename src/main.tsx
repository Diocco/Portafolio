import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query'
import { App } from './App'


import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';

const theme = createTheme({
  palette: {
    primary: {
      light: '#093779',
      main: '#000431',
      dark: '#030011',
      contrastText: '#fff',
    },
    secondary: {
      light: '#1c2bcc',
      main: '#2f00bd',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});


createRoot(document.getElementById('root')!).render(
  <StrictMode>
        <QueryClientProvider client={new QueryClient}>
          <ThemeProvider theme={theme}>
            <App/>
          </ThemeProvider>
        </QueryClientProvider>
  </StrictMode>,
)
