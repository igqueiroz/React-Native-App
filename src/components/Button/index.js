import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, View } from 'react-native';
import { StyleButton, gradientAgenda, touchWrapper } from './style';
import { LinearGradient } from 'expo-linear-gradient';

const Button = (props) => {
  const execute = () => {
    switch (typeof props.execute) {
      case ('function') :
        props.execute()
        break;
      case ('object') :
        props.execute.state.stateUpdate(props.execute.newState);
        break;
    }
  }

  const ChangePage = () => {
    if (props.execute) execute()
    props.navigation.push(props.goScreen)
  }

  return (
    <View>
      <LinearGradient colors={ gradientAgenda } style={ touchWrapper }>
        <TouchableOpacity style={ StyleButton.common } onPress={ ChangePage } >
          { props.children }
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
