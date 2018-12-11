import React from 'react';
import cls from 'classnames';
import PropTypes from 'prop-types';
import Icon from './icon';

class Checkbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: props.defaultChecked,
    };
  }

  getClassname = () => {
    const { disabled } = this.props;
    const { selected } = this.state;
    const style = {
      container: [
        'flex items-center m-1',
        {
          'cursor-not-allowed': disabled,
          'cursor-pointer': !disabled,
        },
      ],
      customCheckbox: {
        common: [
          'flex items-center justify-center',
          'border rounded',
          'focus:outline-none',
          {
            'border-lightBlueGrey': !selected,
            'focus:border-2': !disabled,
            'focus:border-blueyGrey': !selected && !disabled,
            'opacity-60 text-lightBlueGrey bg-paleGrey': disabled,
            'text-primary border-primary focus:border-primary': selected && !disabled,
          },
        ],
        medium: 'w-6 h-6',
        small: 'w-4 h-4',
      },
      icon: { block: selected, hidden: !selected },
      label: 'text-dark flex items-center leading-base ml-2 select-none',
    };
    return style;
  };

  onChange = (val, checked) => {
    const { onChange } = this.props;
    this.setState({ selected: checked });
    onChange(val, checked);
  };

  render() {
    const { size, disabled, value, label, extraClassName, defaultChecked, name } = this.props;
    const style = this.getClassname();
    return (
      <label htmlFor={name} className={cls(style.container, extraClassName)}>
        <input
          type="checkbox"
          id={name}
          name={name}
          className="absolute invisible"
          disabled={disabled}
          defaultChecked={defaultChecked}
          onChange={e => this.onChange(JSON.parse(e.target.value)[0], e.target.checked)}
          value={JSON.stringify([value])}
        />
        <div
          className={cls(style.customCheckbox.common, style.customCheckbox[size])}
          role="button"
          tabIndex={0}
        >
          <Icon name="Check" size="15" className={cls(style.icon)} />
        </div>
        <p className={style.label}>{label}</p>
      </label>
    );
  }
}

Checkbox.defaultProps = {
  defaultChecked: false,
  disabled: false,
  onChange() {},
  size: 'medium',
};
Checkbox.propTypes = {
  defaultChecked: PropTypes.bool,
  disabled: PropTypes.bool,
  extraClassName: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  label: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  size: PropTypes.oneOf(['small', 'medium']),
  // eslint-disable-next-line react/forbid-prop-types
  value: PropTypes.any,
};

export default Checkbox;
