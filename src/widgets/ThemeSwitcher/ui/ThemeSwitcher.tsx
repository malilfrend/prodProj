import React, { FC } from 'react';

import { Themes, useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';

import s from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className = '' }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      type="button"
      onClick={toggleTheme}
      className={classNames(s.ThemeSwitcher, {}, [className])}
      theme={ButtonTheme.CLEAR}
    >
      {theme === Themes.LIGHT ? (
        <LightIcon width={40} height={40} />
      ) : (
        <DarkIcon width={40} height={40} />
      )}
    </Button>
  );
};
