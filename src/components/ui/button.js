import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as css from '@/css/common';

const styles: { [p: string]: React.CSSProperties } = {
  common: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '30px',
    fontFamily: 'bla bla bla',
    cursor: 'pointer',
  },
  tiny: { width: '4rem', height: '1.5rem', fontSize: '0.5rem' },
  small: { width: '6rem', height: '2rem', fontSize: '0.75rem' },
  medium: { width: '8rem', height: '2.5rem', fontSize: '1rem' },
  large: { width: '10rem', height: '3rem', fontSize: '1.25rem' },
  xlarge: { width: '12rem', height: '3.5rem', fontSize: '1.5rem' },
  primary: { backgroundColor: css.lightGray, color: css.white },
  secondary: {
    border: '1px solid',
    borderColor: css.lightGray,
    color: css.lightGray,
  },
};
type Props = {
  onClick: () => void,
  title: string,
  size: string,
  type: string,
};
type State = {};
export default class UIButton extends Component<Props, State> {
  static defaultProps = {
    type: 'primary',
    size: 'medium',
  };

  static propTypes = {
    onClick: PropTypes.func.isRequired,
    size: PropTypes.oneOf(['tiny', 'small', 'medium', 'large', 'xlarge']).isRequired,
    type: PropTypes.oneOf(['primary', 'secondary']).isRequired,
    title: PropTypes.string.isRequired,
  };

  render() {
    const {
      size, type, title, onClick,
    } = this.props;
    return (
      <div onClick={onClick} style={{ ...styles.common, ...styles[size], ...styles[type] }}>
        <div>{title}</div>
      </div>
    );
  }
}
