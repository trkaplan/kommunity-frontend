import React from 'react';
import PropTypes from 'prop-types';
import cls from 'classnames';

const UIParagraph = (props) => {
  return (
    <p className={cls(props.className, props.extraClassName)}>
      {props.children}
    </p>
  );
};

UIParagraph.defaultProps = {
  className: 'text-base leading-base',
};

UIParagraph.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  className: PropTypes.string,
  extraClassName: PropTypes.string,
};

export default UIParagraph;
