import {
  createPlugin,
  createRoutableExtension,
} from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const primerPluginPlugin = createPlugin({
  id: 'primer-plugin',
  routes: {
    root: rootRouteRef,
  },
});

export const PrimerPluginPage = primerPluginPlugin.provide(
  createRoutableExtension({
    name: 'PrimerPluginPage',
    component: () =>
      import('./components/ExampleComponent').then(m => m.ExampleComponent),
    mountPoint: rootRouteRef,
  }),
);
