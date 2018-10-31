import React from 'react';
import PropTypes from 'prop-types';
import cls from 'classnames';

const style = {
  common: 'button inline-block text-center cursor-pointer border border-transparent border-box rounded-lg',
  label: {
    small: 'px-6 py-2 text-sm',
    medium: 'px-6 py-2 text-base leading-base',
    large: 'px-8 py-3 text-lg',
  },
  container: {
    primary: 'text-white bg-blue',
    secondary: 'text-white bg-gray',
    outline: 'text-gray bg-white hover:bg-xlgray border-lgray',
    danger: 'text-white bg-red',
    plain: 'text-blue hover:text-darkblue bg-transparent',
  },
};

const UIButton = (props) => {
  const {
    disabled, extraClassName, size, type, label, onClick,
  } = props;
  const className = cls(style.common, style.label[size], style.container[type], {
    'cursor-not-allowed': disabled,
    'text-lgray hover:text-lgray': disabled && type === 'plain',
    'opacity-20': disabled && type !== 'plain',
    'hover:opacity-80': !disabled && ['primary', 'secondary'].indexOf(type) > -1,
  });
  return (
    <div onClick={onClick} className={cls(className, extraClassName)}>
      {label}
    </div>
  );
};

UIButton.defaultProps = {
  disabled: false,
  size: 'medium',
  type: 'primary',
};

UIButton.propTypes = {
  disabled: PropTypes.bool,
  extraClassName: PropTypes.string,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(['small', 'medium', 'large']).isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['primary', 'secondary', 'outline', 'danger', 'plain']).isRequired,
};

export default UIButton;
