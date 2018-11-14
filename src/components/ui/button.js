import React from 'react';
import PropTypes from 'prop-types';
import cls from 'classnames';

const style = {
  common: 'button inline-block text-center cursor-pointer border border-transparent border-box',
  container: {
    danger: 'text-white bg-red',
    outline: 'text-gray bg-white hover:bg-xlgray border-lgray',
    plain: 'text-blue hover:text-darkblue bg-transparent',
    primary: 'text-white bg-blue',
    secondary: 'text-white bg-gray',
  },
  groupOrder: {
    first: 'rounded-l-lg',
    last: 'rounded-r-lg',
    middle: 'rounded-none',
    none: 'rounded-lg',
  },
  label: {
    large: 'px-8 py-3 text-lg',
    medium: 'px-6 py-2 text-base leading-base',
    small: 'px-6 py-2 text-sm',
  },
};

class UIButton extends React.Component {
  getClassnames = () => {
    const {
      disabled, size, type, groupOrder,
    } = this.props;

    return cls(style.common, style.groupOrder[groupOrder],
      style.label[size], style.container[type], {
        // remove border-left on first item except outline type
        'border-l-0': groupOrder === 'first' && ['outline'].indexOf(type) < 0,
        // remove border-right on last item except outline type
        'border-r-0': groupOrder === 'last' && ['outline'].indexOf(type) < 0,
        // remove border-top-bottom and add bordercolor except outline type
        'border-transparent20 border-t-0 border-b-0': groupOrder !== 'none' && ['outline'].indexOf(type) < 0,
        'cursor-not-allowed': disabled,
        'hover:opacity-80': !disabled && ['primary', 'secondary'].indexOf(type) > -1,
        'opacity-20': disabled && type !== 'plain',
        'text-lgray hover:text-lgray': disabled && type === 'plain',
      });
  }

  render() {
    const { extraClassName, label, onClick } = this.props;

    return (
      <div onClick={onClick} className={cls(this.getClassnames(), extraClassName)}>
        {label}
      </div>
    );
  }
}

UIButton.defaultProps = {
  disabled: false,
  groupOrder: 'none',
  size: 'medium',
  type: 'primary',
};

UIButton.propTypes = {
  disabled: PropTypes.bool,
  extraClassName: PropTypes.string,
  groupOrder: PropTypes.oneOf(['first', 'middle', 'last', 'none']),
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(['small', 'medium', 'large']).isRequired,
  type: PropTypes.oneOf(['primary', 'secondary', 'outline', 'danger', 'plain']).isRequired,
};

export default UIButton;
