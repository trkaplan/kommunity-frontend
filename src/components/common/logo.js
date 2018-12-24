import React from 'react';
import PropTypes from 'prop-types';
import { Link, Paragraph } from '@/components/ui';
import cls from 'classnames';

const Logo = props => {
  const { extraClassName } = props;

  return (
    <div className={cls('inline-block text-right', extraClassName)}>
      <Link
        className="text-xl leading-base no-underline font-bold text-right"
        color="text-dark hover:text-lightBlueGrey"
        to="/"
      >
        <Paragraph className="text-blueyGrey text-2xs font-extrabold -mb-2">BETA</Paragraph>
        <span>kommunity</span>
        <span className="text-primary">.app</span>
      </Link>
    </div>
  );
};

Logo.propTypes = {
  extraClassName: PropTypes.string,
};

export default Logo;
