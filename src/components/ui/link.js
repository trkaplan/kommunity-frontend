import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import cls from 'classnames';

const UILink = props => (
  <NavLink className={cls(props.className, props.extraClassName)} to={props.to}>
    {props.children}
  </NavLink>
);

UILink.defaultProps = {
  className: 'text-base leading-base no-underline text-blueyGrey hover:text-lightBlueGrey px-2',
};

UILink.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  className: PropTypes.string,
  extraClassName: PropTypes.string,
  to: PropTypes.string.isRequired,
};

export default UILink;
