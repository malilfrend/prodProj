import React, { FC, ButtonHTMLAttributes } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import s from './Button.module.scss';

export enum ButtonTheme {
  CLEAR = 'clear',
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className: string;
  theme: ButtonTheme;
};

export const Button: FC<ButtonProps> = ({ className = '', type, children, onClick, theme, ...rest }) => {
  return (
    <button
      type={type}
      className={classNames(s.Button, {}, [className, s[theme]])}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  )
}