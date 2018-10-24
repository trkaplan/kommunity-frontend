import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  common: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '30px',
    fontFamily: 'bla bla bla',
    cursor: 'pointer',
    width: 'fit-content',
  },
  tiny: { padding: '.4rem 2rem', fontSize: '0.5rem' },
  small: { padding: '.6rem 2.5rem', fontSize: '0.75rem' },
  medium: { padding: '.8rem 3rem', fontSize: '1rem' },
  large: { padding: '.8rem 3.5rem', fontSize: '1.25rem' },
  xlarge: { padding: '.8rem 4.5rem', fontSize: '1.5rem' },
  primary: { backgroundColor: '#637381;', color: '#ffffff' },
  secondary: {
    border: '1px solid #637381',
    color: '#637381',
  },
};

const UIButton = (props) => {
  const {
    size, type, title, onClick,
  } = props;
  return (
    <div onClick={onClick} style={{ ...styles.common, ...styles[size], ...styles[type] }}>
      <div>{title}</div>
    </div>
  );
};

UIButton.defaultProps = {
  type: 'primary',
  size: 'medium',
};

UIButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  size: PropTypes.oneOf(['tiny', 'small', 'medium', 'large', 'xlarge']).isRequired,
  type: PropTypes.oneOf(['primary', 'secondary']).isRequired,
  title: PropTypes.string.isRequired,
};

export default UIButton;
