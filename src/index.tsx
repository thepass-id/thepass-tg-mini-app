import '@styles/index.css';

import routes from '@routes';
import {createRoot} from 'react-dom/client';
import {RouterProvider} from 'react-router-dom';
import {QueryClientProvider} from '@tanstack/react-query';
import {StrictMode} from 'react';
import {QUERY_CLIENT} from '@utils';
import {initTg} from './initTg';
import {isTMA, retrieveLaunchParams} from '@telegram-apps/sdk-react';
import {store} from '@stores';
import {Provider} from 'react-redux';

const root = createRoot(document.getElementById('root')!);

isTMA('simple') &&
  initTg(retrieveLaunchParams().startParam === 'debug' || import.meta.env.DEV);

root.render(
  <StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={QUERY_CLIENT}>
        <RouterProvider router={routes} />
      </QueryClientProvider>
    </Provider>
  </StrictMode>,
);
