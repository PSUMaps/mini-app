import React from 'react';
import Layout from '~/../../shared/components/common/layout';

import HeaderBar from '~/widgets/headerBar';
import NavigationBar from '~/widgets/navigationBar';
import EventCard from '~/components/timetable/eventCard.tsx';
import useLoaderData from '~/utils/routerLoader.ts';
import { Event } from '~/models/event';

const EventDescription = () => {
  const event = useLoaderData<Event>();
  event.event_date = new Date(event.event_date);
  return (
    <>
      <HeaderBar pageName="Мероприятие" />
      <Layout>
        <EventCard event={event} />
      </Layout>
      <NavigationBar />
    </>
  );
};

export default EventDescription;
