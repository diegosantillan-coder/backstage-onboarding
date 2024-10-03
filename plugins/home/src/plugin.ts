import {
  createPlugin,
  createRoutableExtension,
} from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const homePlugin = createPlugin({
  id: 'home',
  routes: {
    root: rootRouteRef,
  },
});

export const HomePage = homePlugin.provide(
  createRoutableExtension({
    name: 'HomePage',
    component: () =>
      import('./components/ExampleComponent').then(m => m.ExampleComponent),
    mountPoint: rootRouteRef,
  }),
);
