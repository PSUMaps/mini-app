import React from 'react';
import useAnimEnabled from '../../hooks/useAnimEnabled';
import IStorage from '../../models/storage';
import Button from '../common/button';
import AnimSwitch from './animSwitch';
import ThemeSwitch from './themeSwitch';

const Settings = ({ storage }: { storage: IStorage }) => {
  const { data: animEnabled } = useAnimEnabled();
  return (
    <>
      <div className="flex flex-row px-4 justify-between items-center mt-3 c1">
        Темная тема
        <ThemeSwitch storage={storage} />
      </div>
      <div className="flex flex-row px-4 justify-between items-center mt-3 c1">
        {animEnabled ? 'Отключить анимации' : 'Включить анимации'}
        <AnimSwitch storage={storage} />
      </div>
      <Button
        className="rounded-3xl h-12 w-full mt-5 c3"
        variant="contrast"
        onClick={() =>
          window.open(import.meta.env.VITE_URL_BIND_ETIS, '_blank')
        }
      >
        Привязать профиль ЕТИС
      </Button>
      <Button
        className="rounded-3xl bg-c_secondary dark:bg-cd_telegram dark:text-cd_main h-12 w-full my-3 c3"
        variant="contrast"
        onClick={() => window.open(import.meta.env.VITE_URL_TG_GROUP, '_blank')}
      >
        Группа в Telegram
      </Button>
      <Button
        className="rounded-3xl h-12 w-full mt-auto c1"
        onClick={() => window.open(import.meta.env.VITE_URL_SUPPORT, '_blank')}
      >
        Сообщить об ошибке
      </Button>
    </>
  );
};

export default Settings;
