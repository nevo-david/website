import React from 'react';

import Heading from 'components/shared/heading';

import contentManagement from './data/content-management-lottie-data.json';
import digest from './data/digest-lottie-data.json';
import monitoring from './data/monitoring-lottie-data.json';
import preferences from './data/preferences-lottie-data.json';
import priorityManagement from './data/priority-management-lottie-data.json';
import timezone from './data/timezone-lottie-data.json';
import bg from './images/bg.svg';
import Item from './item';

const TITLE = "We've built it so you don't have to";
const ITEMS = [
  {
    lottieData: digest,
    title: 'Digest',
    description:
      'A digest engine that aggregates multiple events in to a single precise notification.',
  },
  {
    lottieData: preferences,
    title: 'User preferences',
    description:
      'Using Novu API to handle all user preferences and subscriptions across channels. UI components included.',
  },
  {
    lottieData: priorityManagement,
    title: 'Priority management',
    description:
      'A smart API to centralize all communication channels in a single place: E-mail, SMS, Direct, Push and many more...',
  },
  {
    lottieData: monitoring,
    title: 'Monitoring',
    description: 'Debug deliverability and analyze sending patterns  across multiple channels',
  },
  {
    lottieData: contentManagement,
    title: 'Content management',
    description:
      'Manage content for all channels and in multiple languages without the need to redeploy your code',
  },
  {
    lottieData: timezone,
    title: 'Timezone awareness',
    description: "Send transactional notifications based on user's timezone and working hours.",
  },
];

const Features = () => (
  <section className="features safe-paddings relative overflow-hidden pt-30 pb-40 lg:pt-24 lg:pb-32 md:pt-18 md:pb-28 sm:pt-12 sm:pb-18">
    <div className="container relative z-10">
      <Heading
        size="md"
        tag="h2"
        className="text-center leading-tight lg:text-left sm:text-center sm:text-3xl"
        theme="white"
      >
        {TITLE}
      </Heading>

      <ul className="mt-20 grid grid-cols-3 gap-x-8 gap-y-20 lg:mt-16 lg:gap-y-16 md:mt-14 md:grid-cols-2 md:gap-x-6 md:gap-y-14 sm:mt-10 sm:flex sm:flex-col sm:items-center sm:gap-0 sm:space-y-10 sm:text-center">
        {ITEMS.map((item, index) => (
          <Item {...item} key={index} />
        ))}
      </ul>
    </div>

    <img
      className="absolute top-1/2 left-1/2 min-w-[1920px] -translate-x-1/2 -translate-y-1/2"
      src={bg}
      loading="lazy"
      alt=""
      aria-hidden
    />
  </section>
);

export default Features;
