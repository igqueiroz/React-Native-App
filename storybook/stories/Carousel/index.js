import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import style from './style';

export default function Carousel({ children }) {
  return <View style={style.main}>{children}</View>;
}

Carousel.defaultProps = {
  children: null,
};

Carousel.propTypes = {
  children: PropTypes.node,
};
