import './index.css';

import { createRouter, RouterProvider } from '@tanstack/react-router';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import { routeTree } from './routeTree.gen';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './core/services/clients/queryClient';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

const rootElement = document.getElementById('root')!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ReactQueryDevtools buttonPosition='bottom-right' />
      </QueryClientProvider>
    </StrictMode>,
  );
}
