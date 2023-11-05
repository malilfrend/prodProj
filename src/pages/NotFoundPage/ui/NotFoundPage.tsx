import React, { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import s from './NotFoundPage.module.scss';

interface NotFoundPageProps {
  className?: string;
}

const NotFoundPage: FC<NotFoundPageProps> = ({ className = '' }) => {
  return (
    <div className={classNames(s.NotFoundPage, {}, [className])}>
      <h1>404</h1>
      <h2>Oops, page not found</h2>
    </div>
  );
};

export default NotFoundPage;
