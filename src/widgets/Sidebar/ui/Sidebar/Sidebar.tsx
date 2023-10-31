import React, { FC, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import s from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = ({ className = '' }) => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  }
  return (
    <div className={classNames(s.Sidebar, { [s.collapsed]: collapsed }, [className])}>
      <button onClick={onToggle}>
        Toogle
      </button>
      <div className={s.switchers} >
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  )
}