import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  common: {
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
  },
  h1: { fontSize: '1.5rem' },
  h2: { fontSize: '1.25rem' },
  h3: { fontSize: '1rem' },
  h4: { fontSize: '0.75rem' },
  h5: { fontSize: '0.5rem' },
  h6: { fontSize: '0.4rem' },
};

const UIHeader = (props) => {
  const { className, type, text } = props;
  const HeaderType = `h${type}`;
  return (
    <div>
      <HeaderType style={{ ...styles.common, ...styles.h1 }}
      className={className}>{text}</HeaderType>
    </div>
  );
};

UIHeader.propTypes = {
  type: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']).isRequired,
  className: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default UIHeader;
