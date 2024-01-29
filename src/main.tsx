import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import "@radix-ui/themes/styles.css";
import { Theme } from '@radix-ui/themes';
import { ContextProvider } from './context/context.tsx';
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Theme 
     accentColor='gray'
    >
      <ContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ContextProvider>
    </Theme>
  </React.StrictMode>,
)
