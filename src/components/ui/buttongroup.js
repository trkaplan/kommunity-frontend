import React from 'react';
import PropTypes from 'prop-types';

const ButtonGroup = (props) => {
  return (
    <div id="button-group">
      {props.children}
    </div>
  );
};

ButtonGroup.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default ButtonGroup;
