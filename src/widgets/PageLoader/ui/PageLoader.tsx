import React, { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Spinner } from 'shared/ui/Spinner';
import s from './PageLoader.module.scss';

interface PageLoaderProps {
  className?: string;
}

export const PageLoader: FC<PageLoaderProps> = ({ className = '' }) => {
  return (
    <div className={classNames(s.PageLoader, {}, [className])}>
      <Spinner />
    </div>
  );
};
