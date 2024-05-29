import React, { useEffect, useMemo, useState } from 'react';
import bridge from '@vkontakte/vk-bridge';
import { User } from '../../models/user';
import AvatarIcon from '../../assets/avatar.svg?react';

import Line from '../common/line';
import Block from '../common/block';

const UserCard = () => {
  const user: User = useMemo(
    () => ({
      name: 'Иван',
      lastname: 'Иванов',
      patronymic: 'Иванович',
      status: 'Студент',
      major: 'ИКНТ ПМИ-1 2023',
      description:
        'Секретарь профбюро физического факультета, член СНО, волонтёр, член Ордена рыцарей сцены',
    }),
    [],
  );

  const [icon, setIcon] = useState(() => (
    <AvatarIcon className="fill-c_main dark:fill-cd_main w-28 h-28" />
  ));
  useEffect(() => {
    void bridge.send('VKWebAppGetUserInfo').then((s) => {
      user.name = s.first_name;
      user.lastname = s.last_name;
      // eslint-disable-next-line jsx-a11y/alt-text
      setIcon(<img className="w-28 h-28" src={s.photo_100} />);
    });
  }, [user]);

  return (
    <Block>
      <>
        <div className="container flex flex-row flex-nowrap items-center">
          <div className="rounded-half h-full w-auto">{icon}</div>
          <div className="mt-2 ml-2 mr-2 w-full">
            <h2>
              {user.lastname} {user.name}
            </h2>
            <h4 className="mt-2 mb-1">{user.status}</h4>
            <h5>{user.major}</h5>
            <Line className="border-c_inactive dark:border-cd_inactive w-full mt-4 mb-2" />
          </div>
        </div>
        <div className="container flex flex-col">
          <h3 className="my-4 font-bold">О себе</h3>
          <p>{user.description}</p>
        </div>
      </>
    </Block>
  );
};

export default UserCard;
