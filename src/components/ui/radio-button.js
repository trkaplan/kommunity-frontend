import React from 'react';
import cls from 'classnames';
import PropTypes from 'prop-types';

const RadioButton = props => {
  const { disabled, extraClassName, label, onChange, selected, size, value } = props;
  const style = {
    container: [
      'text-blueyGrey m-1 flex items-center',
      { 'cursor-not-allowed': disabled, 'cursor-pointer': !disabled },
    ],
    customRadio: {
      common: cls('flex items-center justify-center rounded-full border focus:outline-none', {
        'border-lightBlueGrey': selected,
        'border-primary focus:border-primary': selected && !disabled,
        'focus:border-2': !disabled,
        'focus:border-blueyGrey': !selected && !disabled,
        'opacity-60 bg-paleGrey': disabled,
      }),
      medium: 'w-6 h-6',
      small: 'w-4 h-4',
    },
    inside: {
      common: [
        'rounded-full',
        {
          'bg-blueyGrey': selected && disabled,
          'bg-primary': selected && !disabled,
          hidden: !selected,
        },
      ],
      medium: 'h-2 w-2',
      small: 'h-2 w-2',
    },
    label: {
      common: ['ml-2', { 'cursor-pointer': !disabled }],
      medium: 'text-lg',
      small: 'text-sm',
    },
    radio: cls('absolute invisible'),
  };

  return (
    <label className={cls(style.container, extraClassName)}>
      <input
        type="radio"
        value={value}
        onClick={onChange}
        className={cls(style.radio)}
        defaultChecked={selected}
        disabled={disabled}
      />
      <div className={cls(style.customRadio.common, style.customRadio[size])} tabIndex={0}>
        <div className={cls(style.inside[size], style.inside.common)} />
      </div>
      <p className={cls(style.label.common, style.label[size])}>{label}</p>
    </label>
  );
};

RadioButton.defaultProps = {
  size: 'medium',
};

RadioButton.propTypes = {
  // RadioButtonGroup overrides disabled key, don't use it
  disabled: PropTypes.bool,
  extraClassName: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  label: PropTypes.string,
  onChange: PropTypes.func,
  selected: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium']).isRequired,
  value: PropTypes.string,
};

export default RadioButton;
