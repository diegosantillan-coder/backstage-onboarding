import {
  createPlugin,
  createRoutableExtension,
} from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const swCatPlugin = createPlugin({
  id: 'sw-cat',
  routes: {
    root: rootRouteRef,
  },
});

export const SwCatPage = swCatPlugin.provide(
  createRoutableExtension({
    name: 'SwCatPage',
    component: () =>
      import('./components/ExampleComponent').then(m => m.ExampleComponent),
    mountPoint: rootRouteRef,
  }),
);
