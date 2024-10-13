import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './app/index';

const root = createRoot(document.getElementById('app') as HTMLElement);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
