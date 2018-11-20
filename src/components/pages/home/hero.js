import React from 'react';
import { Title, Paragraph } from '@/components/ui';

const HomeHero = () => (
  <div className="flex py-6 px-4">
    <div className="self-center">
      <Title type="h3">
        Join, start and build online communities!
      </Title>
      <Paragraph extraClassName="mt-4">
        All your communities, apps, and contacts in one big platform.
      </Paragraph>
    </div>
    <div>
      <img alt="hero" src="https://via.placeholder.com/500x300" />
    </div>
  </div>
);

HomeHero.propTypes = {};

export default HomeHero;
