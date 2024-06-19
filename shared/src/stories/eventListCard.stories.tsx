import type { Meta, StoryObj } from '@storybook/react';
import event from '../components/timetable/eventListCard';

const meta: Meta<typeof event> = {
  title: 'Timetable/Event card',
  component: event,
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    event: {
      organizer: 'Описание',
      title: 'Малая весна ПГНИУ',
      registration_close_datetime: undefined,
      registration_link: 'https://github.com/PSUMaps',
      map_link: 'https://github.com/PSUMaps',
      cover_image:
        'https://cdn.culture.ru/images/b2a75295-f894-5d0c-8d3c-22ee5448220e',
      description:
        'Присоединяйтесь к нам и прославите яркую энергию весны на нашем ежегодном университетском концерте «Малая весна». Целью этого мероприятия',
      id: 106,
      tag: 'Концерт',
      event_date: '2023-09-14T16:00:00',
      location: 'Большой зал СДК ПГНИУ, 7 корп.',
      number_on_site: undefined,
      event_images: undefined,
    },
  },
};
export const LongTitle: Story = {
  args: {
    event: {
      organizer: 'PSU-TOOLS TEAM',
      title:
        'XVI Всероссийская студенческая научно-практическая конференция «Социальное благополучие человека в условиях новой общественной реальности',
      registration_close_datetime: undefined,
      registration_link: 'https://github.com/PSUMaps',
      map_link: 'https://github.com/PSUMaps',
      cover_image:
        'https://cdn.culture.ru/images/17dfa1ca-7963-550e-9a62-cd5b95124b95/c_fill,g_center/01-png',
      description:
        'Присоединяйтесь к нам и прославите яркую энергию весны на нашем ежегодном университетском концерте «Малая весна». Целью этого мероприятия',
      id: 106,
      tag: 'Технологии и инновации',
      event_date: '2024-05-15T00:01:00',
      location: 'Большой зал СДК ПГНИУ, 7 корп.',
      number_on_site: undefined,
      event_images: undefined,
    },
  },
};
