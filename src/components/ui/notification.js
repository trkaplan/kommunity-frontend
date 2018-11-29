import React from 'react';
import PropTypes from 'prop-types';
import cls from 'classnames';
import {
  Slash, AlertCircle, CheckCircle, Info, X,
} from 'react-feather';
import { Paragraph } from './index';

const style = {
  common: 'border-l-4 shadow-md rounded p-4 flex mb-4',
  container: {
    danger: 'border-red',
    info: 'border-blue',
    success: 'border-green',
    warning: 'border-yellow',
  },
  textArea: 'flex-grow px-4',
};

class UINotification extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true,
    };
  }

  dismiss = () => {
    this.setState({ display: false });
  }

  render() {
    const {
      extraClassName, title, text, type, buttons,
    } = this.props;

    const icons = {
      danger: <Slash className="text-red" />,
      info: <Info className="text-blue" />,
      success: <CheckCircle className="text-green" />,
      warning: <AlertCircle className="text-yellow" />,
    };

    return (
      this.state.display
      && <div
        className={cls(style.common, style.container[type], extraClassName)}
        type={type}
      >
        {icons[type]}
        <div className={cls(style.textArea)}>
          {title && <Paragraph extraClassName="font-extrabold mb-2 text-lg">{title}</Paragraph>}
          <Paragraph>{text}</Paragraph>
          {buttons}
        </div>
        <X className="text-lgray cursor-pointer" onClick={() => { this.dismiss(); }}/>
      </div>
    );
  }
}

UINotification.propTypes = {
  buttons: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.object),
  ]),
  extraClassName: PropTypes.string,
  text: PropTypes.string.isRequired,
  title: PropTypes.string,
  type: PropTypes.oneOf(['success', 'warning', 'danger', 'info']).isRequired,
};

export default UINotification;
