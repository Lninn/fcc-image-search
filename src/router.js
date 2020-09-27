import { lazy } from 'react';

export const routes = [
  {
    path: '/home',
    component: lazy(() => import('@src/pages/home')),
  },
  {
    path: '/about',
    component: lazy(() => import('@src/pages/about')),
  },
  {
    path: '/getting-started',
    component: lazy(() => import('@src/pages/getting-started')),
  },
  {
    path: '/api',
    component: lazy(() => import('@src/pages/public-api')),
  },
  {
    path: '/signup',
    component: lazy(() => import('@src/pages/signup')),
  },
  {
    path: '/signin',
    component: lazy(() => import('@src/pages/signin')),
  },
];