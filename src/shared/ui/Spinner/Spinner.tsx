import React, { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import s from './Spinner.module.scss';

interface SpinnerProps {
  className?: string;
}

export const Spinner: FC<SpinnerProps> = ({ className = '' }) => {
  return (
    <div className={classNames(s['lds-roller'], {}, [className])}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
