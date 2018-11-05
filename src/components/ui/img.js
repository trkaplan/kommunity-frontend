import React from 'react';
import PropTypes from 'prop-types';
import cls from 'classnames';
import LazyLoad from 'react-lazyload';

const style = {};

const UIImage = (props) => {
  const {
    src, alt, lazy, height,
  } = props;
  const className = cls(style);
  const Image = () => <img src={src} alt={alt} className={className}/>;
  return (
    lazy
      ? <LazyLoad height={height}><Image/></LazyLoad>
      : <Image/>
  );
};

UIImage.defaultProps = {
};

UIImage.propTypes = {
  src: PropTypes.string,
  lazy: PropTypes.bool,
  height: PropTypes.int,
  alt: PropTypes.string,
};

export default UIImage;
