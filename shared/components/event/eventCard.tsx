import React, { useMemo } from 'react';
import { Event } from "../../models/event";

import Block from "../common/block";
import HeartButton from '../common/heartButton';
import LinkButton from '../common/linkButton';
import WatchIcon from '~/../../shared/assets/watch.svg?react';
import SignUpCard from './sign_upCard';
import ViewTheMapCard from './view_the_mapCard';
import DetailsCard from './detailsCard';
import ContactsCard from './contactsCard';



function EventCard() {
  const event: Event = useMemo(
    () => ({
      organizer: "PSU-TOOLS TEAM",
      title: "Малая весна ПГНИУ",
      registration_close_datetime: null,
      registration_link: null,
      cover_image: "https://res.cloudinary.com/practicaldev/image/fetch/s--xG1gcsyJ--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://thepracticaldev.s3.amazonaws.com/i/h68x0up43hmknl5tjcww.jpg",
      description: "Присоединяйтесь к нам и прославите яркую энергию весны на нашем ежегодном университетском концерте «Малая весна». Целью этого мероприятия",
      id: 106,
      tag: "Технологии и инновации",
      event_date: "2024-05-15T00:01:00",
      location: "Большой зал СДК ПГНИУ, 7 корп.",
      number_on_site: null,
      event_images: null

    }),
    []
  );




  return (
    <Block className={"p-[0_!important]"}>
      <div className="flex flex-col w-full bg-white ">

        <div className="flex relative flex-col w-full aspect-[2.13] ">
          <div className="flex flex-col relative font-bold   ">
            <img
              loading="lazy"
              src={event.cover_image}
              className="object-cover size-full rounded-t-lg"
            />
            <div
              className="justify-center absolute bottom-4 left-4 py-px w-fit max-w-[50%] font-bold rounded-2xl border-2 border-white border-solid">
              <p className="text-white text-center text-wrap c3">{event.tag}</p>
            </div>
            <div className=" absolute bottom-0 right-0 translate-y-1/2  ">
              <HeartButton person={false} />
              <LinkButton link={event.registration_link} />
            </div>
          </div>
        </div>

        <div className="flex flex-col px-4 mt-4 font-bold text-zinc-800">

          <div className="flex gap-3 self-start text-sm text-center">
            <WatchIcon/>
            <div className="my-auto">2 ч. 30 м.</div>
          </div>

          <div className="mt-1.5 text-xl">{event.title}</div>
          <div className="mt-3">
            <span className="text-lg text-black">16:00 </span>
            <span className="text-base text-zinc-500">- 19:30</span>
          </div>
          <div className=" text-sm text-zinc-500">{event.event_date}</div>
          <div className=" mt-4 leading-4 text-sm">
            <span className=" ">Место: </span>
            <span className="font-medium ">
            {event.location}
          </span>
          </div>
          <div className="mt-2 leading-5 text-base text-black">
            Статус: <span className="text-zinc-500">Ожидание</span>
          </div>

          <SignUpCard />
          <ViewTheMapCard />
          <DetailsCard link={event.registration_link} />

          <div className="mt-8 text-lg text-neutral-700">О мероприятии:</div>
          <div className="mt-4 text-base font-medium leading-5 text-neutral-700">
            {event.description}
          </div>
          <ContactsCard/>

        </div>
      </div>
    </Block>
  );
}


export default EventCard;