import React, { memo, useContext} from 'react';
import { Image, Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import LoginStyle from './style';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { AuthContext } from '../../store/AuthProvider';
const imageBackground = require('../../../src/assets/images/login.png');

const Login = (props) => {
  const [user, setUser] = useContext(AuthContext);
  const alertFunc = () => {
    alert('teste')
  }

  const registerPage = ({ page }) => {
    const [changePage, setChangePage ] = useState(page);
  
    setChangePage([newChange]);
  }

  return (
    <ImageBackground source={imageBackground} style={LoginStyle.background} >
      <Image source={require('../../../src/assets/images/agendapets_logo.png')} />
      <View style={LoginStyle.view}>
        <LinearGradient
          colors={LoginStyle.gradientAgenda}
          style={[LoginStyle.styleGradient ]}
        >
          <TouchableOpacity onPress={registerPage}>
            <Text
              style={LoginStyle.styleButton}>
              Cadastre-se
            </Text>
          </TouchableOpacity>
        </LinearGradient>
        <LinearGradient
          colors={LoginStyle.gradientAgenda}
          style={[LoginStyle.styleGradient ]}
        >
          <TouchableOpacity onPress={alertFunc}>
            <Text
              style={LoginStyle.styleButton}>
              Já possuo conta
            </Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
      <View style={LoginStyle.loginStyleRow}
      >
        <LinearGradient
          colors={LoginStyle.gradientFacebook}
          style={[
            LoginStyle.styleGradient
          ]}
        >
          <TouchableOpacity onPress={alertFunc}>
            <View style={LoginStyle.googleLogin}>
              <Image  style={LoginStyle.googleImage} source={require('../../../src/assets/images/g-normal.png')} />
              <Text
                style={{...LoginStyle.styleButton, ...LoginStyle.styleButtonGoogle}}>
                Logar com Google
              </Text>
            </View>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </ImageBackground>
  )
}

Login.navigationOptions = () => {
  const opt = {
    title: null,
    headerStyle: {
      position: 'absolute',
      backgroundColor: 'transparent',
      zIndex: 100,
      top: 0,
      left: 0,
      right: 0,
      elevation: 0,
      shadowOpacity: 0,
      borderBottomWidth: 0,
    }
  }

  if (Platform.OS === "android") {
      opt.headerShown = false
  }
  return opt;
}

export default memo(Login);