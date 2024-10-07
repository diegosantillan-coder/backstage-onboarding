import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { swCatPlugin, SwCatPage } from '../src/plugin';

createDevApp()
  .registerPlugin(swCatPlugin)
  .addPage({
    element: <SwCatPage />,
    title: 'Root Page',
    path: '/sw-cat',
  })
  .render();
