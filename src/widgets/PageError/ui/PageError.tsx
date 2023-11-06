import React, { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import s from './PageError.module.scss';

interface PageErrorProps {
  className?: string;
}

export const PageError: FC<PageErrorProps> = ({ className = '' }) => {
  return (
    <div className={classNames(s.PageError, {}, [className])}>
      <h2>Что-то пошло не так, попробуйте позже</h2>
    </div>
  );
};
