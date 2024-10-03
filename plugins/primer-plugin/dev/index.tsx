import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { primerPluginPlugin, PrimerPluginPage } from '../src/plugin';

createDevApp()
  .registerPlugin(primerPluginPlugin)
  .addPage({
    element: <PrimerPluginPage />,
    title: 'Root Page',
    path: '/primer-plugin',
  })
  .render();
