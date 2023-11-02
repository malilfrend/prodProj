import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button';

import s from './LangSwitcher.module.scss';

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher: FC<LangSwitcherProps> = ({ className = '' }) => {
  const { t, i18n } = useTranslation();

  const onClick = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <Button
      type="button"
      onClick={onClick}
      className={classNames(s.LangSwitcher, {}, [className])}
      theme={ButtonTheme.CLEAR}
    >
      {t('Язык')}
    </Button>
  );
};
