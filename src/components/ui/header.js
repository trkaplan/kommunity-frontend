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

const getSpecificHeader = (className, text) => ({
  h1: <h1 style={{ ...styles.common, ...styles.h1 }} className={className}>{text}</h1>,
  h2: <h2 style={{ ...styles.common, ...styles.h2 }} className={className}>{text}</h2>,
  h3: <h3 style={{ ...styles.common, ...styles.h3 }} className={className}>{text}</h3>,
  h4: <h4 style={{ ...styles.common, ...styles.h4 }} className={className}>{text}</h4>,
  h5: <h5 style={{ ...styles.common, ...styles.h5 }} className={className}>{text}</h5>,
  h6: <h6 style={{ ...styles.common, ...styles.h6 }} className={className}>{text}</h6>,
});

const UIHeader = (props) => {
  const { className, type, text } = props;
  return (
    <div>
      {getSpecificHeader(className, text)[type]}
    </div>
  );
};

UIHeader.defaultProps = {
  type: 'h2',
  className: '',
  text: 'Sample Text',
};

UIHeader.propTypes = {
  type: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']).isRequired,
  className: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default UIHeader;
