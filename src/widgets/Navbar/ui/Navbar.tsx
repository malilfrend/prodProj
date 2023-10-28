import React, { FC } from 'react'

import { ThemeSwitcher } from 'widgets/ThemeSwitcher';

import { classNames } from 'shared/lib/classNames/classNames'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink';

import s from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className = '' }) => {
  return (
    <div className={classNames(s.navbar, {}, [className])}>
      <ThemeSwitcher />
      <div className={s.linksBlock}>
        <AppLink to='/' className={s.main} theme={AppLinkTheme.PRIMARY}>Home</AppLink>
        <AppLink to='/about'>About</AppLink>
      </div>
    </div>
  )
}
