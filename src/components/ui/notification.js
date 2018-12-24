import React from 'react';
import PropTypes from 'prop-types';
import cls from 'classnames';
import Paragraph from './paragraph';
import Icon from './icon';

const style = {
  common: 'rounded-4 p-4 flex mb-4 text-left',
  container: {
    danger: 'border-red',
    info: 'border-blue',
    success: 'border-green',
    warning: 'border-yellow',
  },
  default: 'border-l-4 shadow-md',
  flatContainer: {
    danger: 'bg-faintRed text-red',
    info: 'bg-faintBlue text-blue',
    success: 'bg-faintGreen text-green',
    warning: 'bg-faintYellow text-yellow',
  },
  textArea: 'flex-grow px-4',
};

const icons = {
  danger: <Icon name="Slash" className="text-red flex-no-shrink" />,
  info: <Icon name="Info" className="text-blue flex-no-shrink" />,
  success: <Icon name="CheckCircle" className="text-green flex-no-shrink" />,
  warning: <Icon name="AlertCircle" className="text-yellow flex-no-shrink" />,
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
  };

  render() {
    const { extraClassName, title, text, styleType, buttons, dismissable, flat } = this.props;

    const { display } = this.state;

    return (
      display && (
        <div
          className={
            flat
              ? cls(style.common, style.flatContainer[styleType], extraClassName)
              : cls(style.common, style.default, style.container[styleType], extraClassName)
          }
        >
          {icons[styleType]}
          <div className={cls(style.textArea)}>
            {title && <Paragraph extraClassName="font-extrabold mb-2 text-lg">{title}</Paragraph>}
            <Paragraph>{text}</Paragraph>
            {buttons}
          </div>
          {dismissable && (
            <Icon
              name="X"
              className="text-lgray cursor-pointer flex-no-shrink"
              onClick={() => {
                this.dismiss();
              }}
            />
          )}
        </div>
      )
    );
  }
}

UINotification.propTypes = {
  buttons: PropTypes.oneOfType([PropTypes.object, PropTypes.arrayOf(PropTypes.object)]),
  dismissable: PropTypes.bool,
  extraClassName: PropTypes.string,
  flat: PropTypes.bool,
  styleType: PropTypes.oneOf(['success', 'warning', 'danger', 'info']).isRequired,
  text: PropTypes.string.isRequired,
  title: PropTypes.string,
};

export default UINotification;
