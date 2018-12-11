/* global document */
import React, { Component } from 'react';
import cls from 'classnames';
import PropTypes from 'prop-types';
import Icon from './icon';

const style = {
  dismissable: 'absolute cursor-pointer pin-r pin-t mr-4 mt-4',
  overlay: 'fixed w-full h-full bg-gunmetal opacity-70 pin z-10',
  wrapper: 'bg-white z-20 shadow-xl fixed rounded-16 p-4 pt-10 w-112 min-h-32',
};

const styles = {
  wrapper: {
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
  },
};

class Popup extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.inlineKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.inlineKeyDown);
  }

  inlineKeyDown = e => {
    const { onKeyDown, onClose, dismissable } = this.props;
    // what if user wants to create onKeyDown for spesific popup?
    if (onKeyDown) {
      onKeyDown();
    } else if (e.key === 'Escape' && dismissable && onClose) {
      // we're using e.key because other ones getting deprecated.
      // when user press esc, do defined onClose function.
      onClose();
    }
  };

  onOverlayClick = () => {
    const { onClose, onOverlayClick, dismissable } = this.props;
    if (onOverlayClick) {
      onOverlayClick();
    } else if (dismissable && onClose) {
      onClose();
    }
  };

  render() {
    const { children, dismissable, onClose, show, extraClassName, onCloseIconClick } = this.props;

    return (
      show && (
        <React.Fragment>
          <div
            className={cls(style.overlay, extraClassName)}
            onClick={this.onOverlayClick}
            onKeyDown={this.inlineKeyDown}
            role="button"
            tabIndex="0"
          />
          {/* todo: we can add this width to tailwind setup so we can use media
            queries. */}
          <div className={style.wrapper} style={styles.wrapper}>
            {dismissable && (
              <Icon
                name="X"
                className={style.dismissable}
                // if user wants act different from close thingy, can use onCloseIconClick.
                onClick={onCloseIconClick || onClose}
              />
            )}
            {children}
          </div>
        </React.Fragment>
      )
    );
  }
}

Popup.defaultProps = {
  dismissable: true,
};

Popup.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  dismissable: PropTypes.bool,
  extraClassName: PropTypes.string,
  onClose: PropTypes.func.isRequired,
  onCloseIconClick: PropTypes.func,
  onKeyDown: PropTypes.func,
  onOverlayClick: PropTypes.func,
  show: PropTypes.bool.isRequired,
};

export default Popup;
