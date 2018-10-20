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
    width: 'fit-content',
  },
  tiny: { padding: '.4rem 2rem', fontSize: '0.5rem' },
  small: { padding: '.6rem 2.5rem', fontSize: '0.75rem' },
  medium: { padding: '.8rem 3rem', fontSize: '1rem' },
  large: { padding: '.8rem 3.5rem', fontSize: '1.25rem' },
  xlarge: { padding: '.8rem 4.5rem', fontSize: '1.5rem' },
  primary: { backgroundColor: css.lightGray, color: css.white },
  secondary: {
    border: `1px solid ${css.lightGray}`,
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
