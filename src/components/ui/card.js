import React from 'react';
import PropTypes from 'prop-types';
import cls from 'classnames';

const style = {
  common: 'w-1 border-grey bg-white my-4 p-8 rounded',
  none: 'shadow',
  tiny: 'shadow',
  md: 'shadow-md',
  lg: 'shadow-lg',
};

const Card = (props) => {
  const { shadow } = props;
  return (
    <div className={cls(style[shadow], style.common)}>
      {props.children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  shadow: PropTypes.oneOf(['none', 'tiny', 'md', 'lg']).isRequired,
};

export default Card;
