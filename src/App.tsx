import React, { Suspense, useContext, useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom';

import './styles/index.scss';

import { Counter } from './components/Counter/Counter';

import { HomeAsync } from './pages/Home/Home.async';
import { AboutAsync } from './pages/About/About.async';
import { useTheme } from './theme/useTheme';
import { classNames } from './helpers/classNames/classNames';



export const App: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <div onClick={toggleTheme}>Change theme</div>
      <Link to='/counter'>Counter</Link>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Suspense fallback={'Loading...'}>
        <Routes>
          <Route path='/counter' element={<Counter />} />
          <Route path='/' element={<HomeAsync />} />
          <Route path='/about' element={<AboutAsync />} />
        </Routes>
      </Suspense>
    </div >
  )
};