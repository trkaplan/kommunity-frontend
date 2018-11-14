import React from 'react';

// Example usage:
// <Icon name="camera" className="my-6" />
// See whats available here:
// https://feathericons.com/
const Icon = (props) => {
  // eslint-disable-next-line
  const IconComponent = require(`react-feather/dist/icons/${props.name}`).default;
  return <IconComponent {...props} />;
};

export default Icon;
