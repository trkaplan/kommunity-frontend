import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cls from 'classnames';

const style = {
  caption: 'ui-input__caption text-gray leading-base',
  common:
    'ui-input inline-block border border-lgray rounded bg-white my-2 px-4 py-0 leading-2xl text-base focus:text-black focus:bg-white focus:border-blue focus:border-2 focus:outline-none disabled:bg-xlgray',
  errorText: 'ui-input__error-text text-red my-2 leading-base',
  label: 'ui-input__label text-black block leading-base font-normal',
  state: {
    default: 'text-gray',
    error: 'text-black border-red focus:border-red',
  },
};

class UIInput extends Component {
  state = {
    value: this.props.value,
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.value !== prevState.value) {
      return { value: prevState.value };
    }
    return null;
  }

  componentDidUpdate(prevProps) {
    if (prevProps.value !== this.props.value) {
      this.setState({ value: this.props.value });
    }
  }

  onChangeHandler(e, onChange) {
    const { value } = e.target;
    this.setState({
      value,
    });
    if (onChange) {
      onChange(e);
    }
  }

  render() {
    const {
      placeholder, label, caption, error, disabled, type, extraClassName, onChange,
    } = this.props;
    const className = cls(style.common, {
      [style.state.default]: !error,
      [style.state.error]: error,
    });

    // TODO: add labelFor
    const labelElem = label ? <label className={style.label}>{label}</label> : null;
    const captionText = caption ? <div className={style.caption}>{caption}</div> : null;
    const errorText = typeof error === 'string' ? <div className={style.errorText}>{error}</div> : null;

    return (
      <div>
        {labelElem}
        <input
          placeholder={placeholder}
          type={type || 'text'}
          className={cls(className, extraClassName)}
          autoComplete="off"
          disabled={disabled}
          value={this.state.value}
          onChange={event => this.onChangeHandler(event, onChange)}
        />
        {captionText}
        {errorText}
      </div>
    );
  }
}

UIInput.propTypes = {
  caption: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  extraClassName: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
};

export default UIInput;
