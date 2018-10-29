import React from 'react';
import PropTypes from 'prop-types';

const style = {
  h1: 'text-5xl leading-4xli font-bold',
  h2: 'text-4xl leading-3xl font-bold',
  h3: 'text-3xl leading-2xl font-normal',
  h4: 'text-2xl leading-xl font-normal',
  h5: 'text-xl leading-lg font-normal',
  h6: 'text-lg leading-base font-light',
};

const Title = (props) => {
  const { type } = props;
  const HeaderType = type;
  return (
    <HeaderType className={style[type]}>
      {props.children}
    </HeaderType>
  );
};

Title.propTypes = {
  children: PropTypes.object,
  type: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']).isRequired,
};

export default Title;
