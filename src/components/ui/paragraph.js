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
  className: PropTypes.string,
  extraClassName: PropTypes.string,
};

export default UIParagraph;
