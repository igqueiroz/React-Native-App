import React from 'react';
import { Image, Text, View, ImageBackground, TouchableOpacity, TextInput, Alert, KeyboardAvoidingView, Platform  } from 'react-native';
import SigninStyle from './style';
import { useState } from 'react';
import LoadingOverlay from '../../components/LoadingOverlay';
import Button from '../../components/Button';
import Constants from 'expo-constants';

const imageBack = require('../../../src/assets/images/login.png');
const passEye = require('../../../src/assets/images/eye.png');
const passEyeClosed = require('../../../src/assets/images/eye-closed.png');
const agendalogo = require('../../../src/assets/images/agendapets_logo.png');

const Signin = (props) => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState({});
  const [password, setShowPassword] = useState({show: false, text: null })

  const showPassword = () => {
    if (password.show) setShowPassword({show: false, text: password.text})
    else setShowPassword({show: true, text: password.text})
  }

  const validationFields = () => {
    if ( !email.email || !password.text ) {
      return {
      success: false,
      msg: { title: "Eiii..", desc: "Todos os campos são obrigatórios." }};
    }
    let emailValid = (/.*[@].*[\.]/g).test(email.email);
    if (!emailValid) return {
      success: false,  
      msg: { title: "Hey..", desc: "Digite um e-mail válido" }
    };
    return { success: true };
  }

  const handleResponse = res => {
    if(res.ok) {
      return res.json()
    }
    throw new Error( JSON.stringify(res.status) )
  }

  const sendData = async () => {
    const options = {
      method: 'POST',
      body: JSON.stringify({
        email: email.email,
        password: password.text
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        'Accept': 'application/json'
      }
    }
    console.log('${Constants.manifest.extra.API_URL}/login}', `${Constants.manifest.extra.API_URL}/login`)
    return fetch( `${Constants.manifest.extra.API_URL}/login`, options)
      .then(handleResponse)
      .then((json) => {
        console.log('json', json.token)
        if (json.token) {
          setToken(json.token);
          return { success: true }
        }
      })
      .catch((error) => {
        if (error.message === '401') return { success: false, msg: { title: "Dados incorretos" , desc: 'Digite novamente ou clique em Esqueci minha senha.' }}
        return { success: false, msg: { title: "Tente novamente mais tarde" , desc: `Erro:\n${JSON.stringify(error)}\n${Constants.manifest.extra.APP_ENV === 'DEV' && Constants.manifest.extra.API_URL}` }}
      });
    }

  const onSubmit = async () => {
    const valid = validationFields();
    if (!valid.success) return Alert.alert(valid.msg.title, valid.msg.desc);
    setLoading(true);
    const result = await sendData();
    setLoading(false);
    console.log(result)
    if (valid.success && result.success) return props.navigation.push('Login');
    return Alert.alert(result.msg.title, result.msg.desc );
  }

  const passwordShow = (type) => {
    if (type.show) return <Image source={passEye} />
    else return <Image source={passEyeClosed} />
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={SigninStyle.flexViewOne}
    >
    { loading && <LoadingOverlay /> }
    <View style={SigninStyle.flexViewOne}>
        <ImageBackground source={imageBack} style={SigninStyle.background} >
          <Image source={agendalogo} />
            <View style={SigninStyle.view}>
              <TextInput
                style={SigninStyle.styleInput}
                value={ email.text }
                onChangeText={text => {
                  setEmail({ email: text })
                }}
                placeholder="E-mail"
              />
              <View>
                <TextInput
                  secureTextEntry={!password.show}
                  style={SigninStyle.styleInput}
                  placeholder="Senha"
                  value={ password.text }
                  onChangeText={text => {
                    setShowPassword({show: password.show, text })
                  }}
                />
                <TouchableOpacity style={SigninStyle.password} onPress={() => showPassword()}>
                  { passwordShow(password) }
                </TouchableOpacity>
              </View>
            </View>

            <View style={SigninStyle.signinStyleRow}>
              <Button execute={ onSubmit } >
                  <Text style={{...SigninStyle.styleInput, ...SigninStyle.register}}>OK</Text>
              </Button>
            </View>
        </ImageBackground>
    </View>
  </KeyboardAvoidingView>
  )
}

export default Signin;