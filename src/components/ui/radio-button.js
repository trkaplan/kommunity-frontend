import React from 'react';
import cls from 'classnames';
import PropTypes from 'prop-types';

const RadioButton = (props) => {
  const onChange = (val, checked) => {
    props.onChange(props.id, val, checked);
  };

  const {
    size,
    name,
    disabled,
    value,
    label,
    extraClassName,
    defaultChecked,
    selectedId,
    id,
  } = props;
  const style = {
    container: [
      'text-blueyGrey m-1 flex items-center',
      { 'cursor-not-allowed': disabled, 'cursor-pointer': !disabled },
    ],
    customRadio: {
      common: cls('flex items-center justify-center rounded-full border focus:outline-none', {
        'border-lightBlueGrey': selectedId !== id,
        'border-primary focus:border-primary': selectedId === id && !disabled,
        'focus:border-2': !disabled,
        'focus:border-blueyGrey': selectedId !== id && !disabled,
        'opacity-60 bg-paleGrey': disabled,
      }),
      medium: 'w-6 h-6',
      small: 'w-4 h-4',
    },
    inside: {
      common: [
        'rounded-full',
        {
          'bg-blueyGrey': selectedId === id && disabled,
          'bg-primary': selectedId === id && !disabled,
          hidden: selectedId !== id,
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
        value={JSON.stringify([value])}
        onChange={e => onChange(JSON.parse(e.target.value)[0], e.target.checked)}
        className={cls(style.radio)}
        name={name}
        defaultChecked={defaultChecked}
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
  defaultChecked: false,
  disabled: false,
  onChange() {},
  size: 'medium',
};
RadioButton.propTypes = {
  defaultChecked: PropTypes.bool,
  disabled: PropTypes.bool,
  extraClassName: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  id: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  selectedId: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium']).isRequired,
  value: PropTypes.any,
};

export default RadioButton;
