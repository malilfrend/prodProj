import React, { Suspense } from 'react'
import { Link, Route, Routes } from 'react-router-dom';

import { classNames } from 'shared/lib/classNames/classNames';
import { AboutPage } from 'pages/About';
import { HomePage } from 'pages/Home/';

import { useTheme } from './providers/ThemeProvider';

import './styles/index.scss';
import { AppRouter } from './providers/Router';
import { Navbar } from 'widgets/Navbar';

export const App: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />
      <AppRouter />
    </div >
  )
};