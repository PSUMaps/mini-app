import React, { useState } from 'react';
import HeartIcon from '../../../assets/heart.svg?react';
import Button from '../../common/button';

const HeartButton = ({ active }: { active: boolean }) => {
  const [isActive, setIsActive] = useState(active);
  return (
    <Button
      className={`h-10 w-10 rounded-full active:scale-90 ${isActive ? 'bg-red-600 dark:bg-red-600' : ''}`}
      onClick={() => setIsActive(!isActive)}
      title={isActive ? 'Удалить из избранного' : 'Добавить в избранное'}
    >
      <HeartIcon
        className={`stroke-0 ${isActive ? 'fill-cd_main' : 'dark:fill-cd_main'}`}
      />
    </Button>
  );
};

export default HeartButton;