import React from 'react';
import PropTypes from 'prop-types';

const ButtonGroup = props => {
  const { children, extraClassName } = props;
  const childCount = React.Children.count(children);
  const newButtons = React.Children.map(children, (child, index) => {
    if (index === 0) return React.cloneElement(child, { groupOrder: 'first' });
    if (index === childCount - 1) return React.cloneElement(child, { groupOrder: 'last' });
    return React.cloneElement(child, { groupOrder: 'middle' });
  });

  return <div extraClassName={extraClassName}>{newButtons}</div>;
};

ButtonGroup.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  extraClassName: PropTypes.string,
};

export default ButtonGroup;
