/// <reference types="vite-plugin-svgr/client" />

import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import getStoredTheme from 'psumaps-frontend/shared/utils/readTheme';
import MapIcon from 'psumaps-frontend/shared/assets/map.svg?react';
import TimetableIcon from 'psumaps-frontend/shared/assets/timetable.svg?react';
import AccountIcon from 'psumaps-frontend/shared/assets/account.svg?react';
import Storage from '~/app/storage';

function NavigationBar() {
  const location = useLocation();

  useEffect(() => {
    const loadTheme = async () => {
      const theme = await getStoredTheme(new Storage());
      if (theme) document.documentElement.classList.add('dark');
    };
    void loadTheme();
  }, []);

  // Определяем цвет иконки на основе текущего пути
  const fill = (path: string) => {
    if (location.pathname === path) {
      return 'fill-c_main dark:fill-cd_main';
    }
    return 'fill-c_secondary dark:fill-cd_secondary';
  };

  return (
    <div className="bg-c_bg dark:bg-cd_bg fixed bottom-0 flex flex-row w-full min-h-14 h-[8vh] border-t p-4 justify-evenly border-c_inactive">
      <a href="/" aria-label="Карта">
        <MapIcon className={fill('/')} />
      </a>
      <a href="/profile" aria-label="Профиль">
        <AccountIcon className={fill('/profile')} />
      </a>
      <a href="/timetable" aria-label="Расписание">
        <TimetableIcon className={fill('/timetable')} />
      </a>
    </div>
  );
}

export default NavigationBar;