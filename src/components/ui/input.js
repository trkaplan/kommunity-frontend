import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import cls from 'classnames';

const style = {
  common:
  'ui-input inline-block border border-lgray rounded bg-white my-2 px-4 py-0 leading-2xl text-base focus:text-black focus:bg-white focus:border-blue focus:border-2 focus:outline-none disabled:bg-xlgray',
  errorText: 'error-text text-red my-2 leading-base',
  helpText: 'help-text text-gray leading-base',
  label: 'label text-black block leading-base font-normal',
  state: {
    default: 'text-gray',
    error: 'text-black border-red focus:border-red',
  },
};

class UIInput extends Component {
  state = {
    value: this.props.value,
  };

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
      autoComplete, placeholder, label, helpText, error, disabled, type, extraClassName, onChange,
    } = this.props;
    const className = cls(style.common, {
      [style.state.default]: !error,
      [style.state.error]: error,
    });

    // TODO: add labelFor
    const labelElem = label ? <label className={style.label}>{label}</label> : null;
    const helpTextElem = helpText ? <div className={style.helpText}>{helpText}</div> : null;
    const errorText = typeof error === 'string' ? <div className={style.errorText}>{error}</div> : null;

    return (
      <Fragment>
        {labelElem}
        <input
          placeholder={placeholder}
          type={type}
          className={cls(className, extraClassName)}
          autoComplete={autoComplete}
          disabled={disabled}
          value={this.state.value}
          onChange={event => this.onChangeHandler(event, onChange)}
        />
        {helpTextElem}
        {errorText}
      </Fragment>
    );
  }
}

UIInput.defaultProps = {
  autoComplete: 'off',
  type: 'text',
};

UIInput.propTypes = {
  autoComplete: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  extraClassName: PropTypes.string,
  helpText: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
};

export default UIInput;
