import React from 'react';
import * as Icons from 'react-feather';

// Example usage:
// <Icon name="Camera" className="my-6" />
// See whats available here:
// https://feathericons.com/
const Icon = (props) => {
  const IconComp = Icons[props.name];
  return <IconComp {...props} />;
};

export default Icon;
