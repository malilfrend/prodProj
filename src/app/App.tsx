import React, { Suspense, useEffect } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from './providers/ThemeProvider';

import './styles/index.scss';
import { AppRouter } from './providers/Router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';

export const App: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};
