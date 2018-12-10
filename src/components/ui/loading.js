import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '.';

const style = {
  animation: 'spin 2s linear infinite',
};

const Loading = (props) => {
  return (
    <div className="text-center my-3">
      <Icon name="Loader" size={props.size} style={style} />
    </div>
  );
};

Loading.defaultProps = {
  size: 36,
};

Loading.propTypes = {
  size: PropTypes.number,
};

export default Loading;
