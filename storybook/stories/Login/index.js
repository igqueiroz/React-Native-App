import React from 'react';
import { Image, Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import LoginStyle from './style';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
const imageBackground = require('../../../src/assets/images/login.png');

const alertFunc = () => {
  alert('teste')
}

const Login = (props) => {
  const registerPage = ({ page }) => {
    const [changePage, setChangePage ] = useState(page);
  
    setChangePage([newChange]);
  }

  return (
    <ImageBackground source={imageBackground} style={LoginStyle.background} >
      <Image
        source={require('../../../src/assets/images/agendapets_logo.png')}
      />
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
            <Text
              style={{...LoginStyle.styleButton, ...LoginStyle.styleButtonFb}}>
              Logar com Facebook
            </Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </ImageBackground>
  )
}

export default Login;