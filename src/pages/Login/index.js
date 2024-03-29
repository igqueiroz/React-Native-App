import React, { memo, useContext, useCallback, useState} from 'react';
import { Image, Text, View, ImageBackground, TouchableOpacity, Alert } from 'react-native';
import LoginStyle from './style';
import { LinearGradient } from 'expo-linear-gradient';
import Button from '../../components/Button';
import { AuthContext } from '../../store/AuthProvider'
import { useFocusEffect } from '@react-navigation/native';
import Constants from 'expo-constants';
import LoadingOverlay from '../../components/LoadingOverlay';

const imageBackground = require('../../../src/assets/images/login.png');
const imageLogo = require('../../../src/assets/images/agendapets_logo.png');
const googleIcon = require('../../../src/assets/images/g-normal.png');

const Login = (props) => {
  const [ loading, setLoading ] = useState(false);
  const { token, user } = useContext(AuthContext)

  const alertFunc = (retry = false) => {
    let alertActive = (!retry) ? undefined : [{
      text: 'Ok'
    },{
      text: 'Reenviar e-mail', 
      onPress: () => {
        Alert.alert('Ative sua conta', 'E-mail de ativação reenviado com sucesso');   
      } 
    }]
    Alert.alert('Ative sua conta', 'Acesse seu email e ative sua conta', alertActive)
  }

  const verifyAgain = async () => {
    setLoading(true);
    await verify(user.id).then((verified) => {
      setLoading(false);
      if (verified) { props.navigation.push('Home') }
      else { alertFunc(true); }
    });
    setLoading(false);
  }

  const verify = async (id) => {
    const verifiedUser = await sendData(id);
    return verifiedUser;
    
  }

  const sendData = async (id) => {
    const options = {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        'Accept': 'application/json'
      }
    }
    return fetch( `${Constants.manifest.extra.API_URL}/user/${id}`, options)
      .then((res) => res.json())
      .then((json) => {
        if (json.is_verified) return true
        return false
      })
      .catch((error) => {
        return console.error(error);
      });
    }

  useFocusEffect(
    useCallback(() => {
      if (user && user.id) {
        setLoading(true);
        verify(user.id).then((verified) => {
          setLoading(false);
          if (verified) { props.navigation.push('Home') }
          else { alertFunc(); }
        });
      }
    }, [user])
  );

  return (
    <ImageBackground source={ imageBackground } style={ LoginStyle.background } >
      { loading && <LoadingOverlay /> }
      <Image source={ imageLogo } />
      <View style={ LoginStyle.view }>
        {
          !user &&
          <>
            <View style={ LoginStyle.viewMargin }>
            <Button goScreen="Signup" navigation={props.navigation}><Text style={ LoginStyle.styleButton }>Registre-se</Text></Button>
            </View>
            <View>
              <Button goScreen="Signin" navigation={props.navigation}><Text style={ LoginStyle.styleButton }>Já possuo conta</Text></Button>
            </View>
          </>
        }
        {
          user && !user.verified &&
          <>
            <View style={ LoginStyle.viewMargin }>
              <Button execute={ verifyAgain }><Text style={ LoginStyle.styleButton }>Registre-se</Text></Button>
            </View>
            <View>
              <Button execute={ verifyAgain }><Text style={ LoginStyle.styleButton }>Já possuo conta</Text></Button>
            </View>
          </>
        }
      </View>
      <View style={LoginStyle.loginStyleRow}>
        <LinearGradient
          colors={LoginStyle.gradientFacebook}
          style={[LoginStyle.styleGradientz]}
        >
          <TouchableOpacity onPress={ alertFunc }>
            <View style={LoginStyle.googleLogin}>
              <Image  style={LoginStyle.googleImage} source={googleIcon} />
              <Text
                style={{...LoginStyle.styleButton, ...LoginStyle.styleButtonGoogle}}>
                Logar com Google
                { user && <Text>User</Text> }
                { token && <Text>Token</Text> }
              </Text>
            </View>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </ImageBackground>
  )
}

export default memo(Login);