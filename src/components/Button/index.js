import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, View } from 'react-native';
import { StyleButton, gradientAgenda, touchWrapper } from './style';
import { LinearGradient } from 'expo-linear-gradient';

const Button = ({ onPress, children }) => {
  Button.defaultProps = {
    children: null
  };

  return (
    <View>
      <LinearGradient colors={ gradientAgenda } style={ touchWrapper }>
        <TouchableOpacity style={ StyleButton.common } onPress={ onPress }>
          { children }
        </TouchableOpacity>
      </LinearGradient>
    </View>
    );
}

export default Button;


Button.propTypes = {
  children: PropTypes.node,
  onPress: PropTypes.func,
};
