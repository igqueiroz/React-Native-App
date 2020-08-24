import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, View } from 'react-native';
import { StyleButton, gradientAgenda, touchWrapper } from './style';
import { LinearGradient } from 'expo-linear-gradient';

const Button = ({ children, goScreen, navigation }) => {
  const ChangePage = () => {
    navigation.push(goScreen)
  }

  return (
    <View>
      <LinearGradient colors={ gradientAgenda } style={ touchWrapper }>
        <TouchableOpacity style={ StyleButton.common } onPress={ ChangePage } >
          { children }
        </TouchableOpacity>
      </LinearGradient>
    </View>
    );
}

export default Button;

Button.defaultProps = {
  children: null,
  onPress: () => {}
};

Button.propTypes = {
  children: PropTypes.node,
  onPress: PropTypes.func,
};
