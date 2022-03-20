import React, { memo, useContext} from 'react';
import { Image, Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import LoginStyle from './style';
import { LinearGradient } from 'expo-linear-gradient';
import Button from '../../components/Button';
import { AuthContext } from '../../store/AuthProvider';
const imageBackground = require('../../../src/assets/images/login.png');
const imageLogo = require('../../../src/assets/images/agendapets_logo.png');
const googleIcon = require('../../../src/assets/images/g-normal.png');

const Login = (props) => {
  const [user, setUser] = useContext(AuthContext);
  const alertFunc = () => {
    alert('teste')
  }


  return (
    <ImageBackground source={ imageBackground } style={ LoginStyle.background } >
      <Image source={ imageLogo } />
      <View style={ LoginStyle.view }>
        <View style={ LoginStyle.viewMargin }>
          <Button goScreen="Signup" navigation={props.navigation}><Text style={ LoginStyle.styleButton }>Registre-se</Text></Button>
        </View>
        <View>
          <Button goScreen="Signin" navigation={props.navigation}><Text style={ LoginStyle.styleButton }>Já possuo conta</Text></Button>
        </View>
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
              <Image  style={LoginStyle.googleImage} source={googleIcon} />
              <Text
                style={{...LoginStyle.styleButton, ...LoginStyle.styleButtonGoogle}}>
                Logar com Google
              </Text>
            </View>
          </TouchableOpacity>
        </LinearGradient>
      </View>
      <View>
          <Button goScreen="Home" navigation={props.navigation}><Text style={ LoginStyle.styleButton }>Home Teste</Text></Button>
        </View>
    </ImageBackground>
  )
}

export default memo(Login);