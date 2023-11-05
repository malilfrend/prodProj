import React from 'react';
import { RouteProps } from 'react-router-dom';

import { AboutPage } from 'pages/About';
import { HomePage } from 'pages/Home';
import { NotFoundPage } from 'pages/NotFoundPage';

export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  NOT_FOUND = 'not_found',
}

export const RouterPaths: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.NOT_FOUND]: '*',
};

export const routerConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    element: <HomePage />,
    path: RouterPaths.main,
  },
  [AppRoutes.ABOUT]: {
    element: <AboutPage />,
    path: RouterPaths.about,
  },
  [AppRoutes.NOT_FOUND]: {
    element: <NotFoundPage />,
    path: RouterPaths.not_found,
  },
};
