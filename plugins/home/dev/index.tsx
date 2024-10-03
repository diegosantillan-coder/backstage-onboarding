import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { homePlugin, HomePage } from '../src/plugin';

createDevApp()
  .registerPlugin(homePlugin)
  .addPage({
    element: <HomePage />,
    title: 'Root Page',
    path: '/home',
  })
  .render();
