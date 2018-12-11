import React from 'react';
import PropTypes from 'prop-types';
import cls from 'classnames';

const styles = {
  horizontal: 'flex',
  vertical: 'flex flex-col items-start',
};
class RadioButtonGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedId: undefined,
    };
  }

  componentDidMount() {
    React.Children.map(this.props.children, (child, index) => {
      if (!this.state.selectedId && child.props.defaultChecked) {
        this.setState({ selectedId: index + this.props.name });
      }
    });
  }

  onChange = (itemOnChage) => {
    return (id, val, checked) => {
      if (id !== this.state.selectedId && checked) this.setState({ selectedId: id });
      if (this.props.onChange) this.props.onChange(val, checked);
      else if (itemOnChage) itemOnChage(val, checked);
    };
  };

  render() {
    const {
      size, extraClassName, orientation, children, name,
    } = this.props;
    const newRadioButtons = React.Children.map(children, (child, index) => {
      return React.cloneElement(child, {
        extraClassName: { 'w-full': orientation === 'vertical' },
        id: index + name,
        name,
        onChange: this.onChange(child.props.onChange),
        selectedId: this.state.selectedId,
        size,
      });
    });

    return <div className={cls(extraClassName, styles[orientation])}>{newRadioButtons}</div>;
  }
}
RadioButtonGroup.defaultProps = {
  orientation: 'vertical',
};
RadioButtonGroup.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  extraClassName: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),
  size: PropTypes.oneOf(['small', 'medium']),
};

export default RadioButtonGroup;
