import React from 'react';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();

  return <div className="">{t('Главная страница')}</div>;
};

export default Home;
