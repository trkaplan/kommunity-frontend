
import React from 'react';
import { Link, Paragraph } from '@/components/ui';

const Logo = () => {
  return (
    <div className="inline-block text-right">
      <Link
        className="text-xl leading-base no-underline font-bold text-right"
        color='text-dark hover:text-lightBlueGrey' to="/">
        <Paragraph className="text-blueyGrey text-2xs leading-base font-extrabold -mb-2">BETA</Paragraph>
        <span>kommunity</span><span className="text-primary">.app</span>
      </Link>
    </div>
  );
};

export default Logo;
