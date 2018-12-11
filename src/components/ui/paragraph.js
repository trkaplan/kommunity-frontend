import React from 'react';
import PropTypes from 'prop-types';
import cls from 'classnames';

const style = {
  base: 'text-base leading-base',
  lg: 'text-lg leading-lg',
  sm: 'text-sm leading-sm',
  xl: 'text-xl leading-xl',
  xs: 'text-xs leading-xs',
};

const UIParagraph = (props) => {
  return (
    <p className={cls((
      props.className ? props.className : style[props.type]),
    props.extraClassName)}
      style={props.style}
    >
      {props.children}
    </p>
  );
};

UIParagraph.defaultProps = {
  type: 'base',
};

UIParagraph.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  className: PropTypes.string,
  extraClassName: PropTypes.string,
  style: PropTypes.object,
  type: PropTypes.string,
};

export default UIParagraph;
