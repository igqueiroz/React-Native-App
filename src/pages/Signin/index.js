import React from 'react';
import { Image, Text, View, ImageBackground, TouchableOpacity, TextInput, Alert, KeyboardAvoidingView, Platform  } from 'react-native';
import SigninStyle from './style';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { TextInputMask } from 'react-native-masked-text';
import LoadingOverlay from '../../components/LoadingOverlay';

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
    if (password.text !== rePassword.text) return {
      success: false,  
      msg: { title: "Opps..", desc: "As senhas devem ser idênticas." }
    };
    return { success: true };
  }


  const sendData = async () => {
    
    return fetch("https://api.chucknorris.io/jokes/random", { "method": "GET" })
      .then((response) => response.json())
      .then((json) => {
        return { success: true, msg: { title: "Uhuu..", desc: json }}
      })
      .catch((error) => {
        return { success: false, msg: { title: "Tente novamente mais tarde" , desc: `Erro:\n${error.message}` }}
      });
    }

  const onSubmit = async () => {
    const valid = validationFields();
    if (!valid.success) return Alert.alert(valid.msg.title, valid.msg.desc);
    setLoading(true);
    const result = await sendData();
    setLoading(false);
    if (valid.success && result.success) return Alert.alert(result.msg.title, JSON.stringify(result.msg.desc) );
    if (!valid.success && result.msg) return Alert.alert(result.msg.title, result.msg.desc );
    return Alert.alert(result.msg.title, result.msg.desc );
  }

  const passwordShow = (type) => {
    if (type.show) return <Image source={passEye} />
    else return <Image source={passEyeClosed} />
  }

  return (
    <>
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
                <LinearGradient
                  colors={SigninStyle.gradientRegister}
                  style={[SigninStyle.styleGradient]}
                >
                  <TouchableOpacity onPress={() => onSubmit()}>
                    <Text style={{...SigninStyle.styleInput, ...SigninStyle.register}}>
                      OK
                    </Text>
                  </TouchableOpacity>
                </LinearGradient>
              </View>
          </ImageBackground>
      </View>
    </KeyboardAvoidingView>
    </>
  )
}

export default Signin;