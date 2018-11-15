import React from 'react';
import PropTypes from 'prop-types';

const ButtonGroup = (props) => {
  const childCount = React.Children.count(props.children);
  const newButtons = React.Children.map(props.children, (child, index) => {
    if (index === 0) return React.cloneElement(child, { groupOrder: 'first' });
    if (index === childCount - 1) return React.cloneElement(child, { groupOrder: 'last' });
    return React.cloneElement(child, { groupOrder: 'middle' });
  });

  return (
    <div>
      {newButtons}
    </div>
  );
};

ButtonGroup.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default ButtonGroup;
