import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import cls from 'classnames';

const UILink = props => {
  const { color, className, extraClassName, children, to } = props;
  return (
    <NavLink className={cls(color, className, extraClassName)} to={to}>
      {children}
    </NavLink>
  );
};

UILink.defaultProps = {
  className: 'text-base leading-base no-underline',
  color: 'text-blueyGrey hover:text-lightBlueGrey',
};

UILink.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  className: PropTypes.string,
  color: PropTypes.string,
  extraClassName: PropTypes.string,
  to: PropTypes.string.isRequired,
};

export default UILink;
