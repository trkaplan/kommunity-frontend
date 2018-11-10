import React from 'react';
import PropTypes from 'prop-types';
import cls from 'classnames';

import UIImage from './img';

const style = {
  common: 'flex items-center justify-center bg-gray rounded-full text-white',
  img: 'rounded-full w-full',
  letter: {
    lg: 'text-xl',
    md: 'text-base',
    sm: 'text-sm',
    xl: 'text-3xl',
    xs: 'text-xs',
  },
  size: {
    lg: 'w-16 h-16',
    md: 'w-12 h-12',
    sm: 'w-8 h-8',
    xl: 'w-48 h-48',
    xs: 'w-6 h-6',
  },
};

const Avatar = (props) => {
  const { size, src, letters } = props;
  return (
    <div className={cls(style.size[size], style.common)}>
      { src
        ? <UIImage className ={cls(style.img)} src={src} height={150} alt=""/>
        : <p className ={cls(style.letter[size])}>{letters}</p>
      }
    </div>
  );
};

Avatar.defaultProps = {
  letters: 'KO',
  size: 'md',
  src: null,
};

Avatar.propTypes = {
  letters: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']).isRequired,
  src: PropTypes.string.isRequired,
};

export default Avatar;
