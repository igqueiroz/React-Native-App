import React from 'react';
import { Image, Text, View, ImageBackground, TouchableOpacity, TextInput, Alert, KeyboardAvoidingView, Platform  } from 'react-native';
import RegisterStyle from './style';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { TextInputMask } from 'react-native-masked-text';
import LoadingOverlay from '../../components/LoadingOverlay';
import Constants from 'expo-constants';
import { useToken } from '../../auth/useToken';

const imageBack = require('../../../src/assets/images/login.png');
const passEye = require('../../../src/assets/images/eye.png');
const passEyeClosed = require('../../../src/assets/images/eye-closed.png');
const agendalogo = require('../../../src/assets/images/agendapets_logo.png');

const Signup = (props) => {
  const [token, setToken] = useToken();
  const [loading, setLoading] = useState(false);
  const [fullName, setFullName] = useState({});
  const [cpf, setCpf] = useState({});
  const [cel, setCelphone] = useState({});
  const [email, setEmail] = useState({});
  const [password, setShowPassword] = useState({show: false, text: null })
  const [rePassword, setReShowPassword] = useState({show: false, text: null })
  
  const showPassword = () => {
    if (password.show) setShowPassword({show: false, text: password.text})
    else setShowPassword({show: true, text: password.text})
  }

  const showRePassword = () => {
    if (rePassword.show) setReShowPassword({show: false, text: rePassword.text})
    else setReShowPassword({show: true, text: rePassword.text})
  }

  const validationFields = () => {
    if ( !fullName.fullName || !cpf.number || !cel.number || !email.email || !password.text || !rePassword.text) {
      return {
      success: false,
      msg: { title: "Eiii..", desc: "Todos os campos são obrigatórios." }};
    }
    if (fullName.fullName.indexOf(" ") < 0) return {
      success: false,  
      msg: { title: "Hey..", desc: "Você precisa inserir seu nome completo" }
    };
    let emailValid = (/.*[@].*[\.]/g).test(email.email);
    if (!emailValid) return {
      success: false,  
      msg: { title: "Hey..", desc: "Digite um e-mail válido" }
    };
    if (cel.number.trim().length < 14) return {
      success: false,  
      msg: { title: "Hey..", desc: "Digite um telefone válido" }
    }
    if (cpf.number.trim().length < 14) return {
      success: false,  
      msg: { title: "Hey..", desc: "Digite um CPF válido" }
    }
    if (password.text !== rePassword.text) return {
      success: false,  
      msg: { title: "Opps..", desc: "As senhas devem ser idênticas." }
    };
    if (password.text.trim().length < 8) return {  
      success: false,  
      msg: { title: "Iiii..", desc: "A senha precisa, no mínimo, de 8 caracteres." }
    };
    return { success: true };
  }


  const sendData = async () => {
    const options = {
      method: 'POST',
      body: JSON.stringify({
        email: email.email,
        password: password.text,
        cpf: cpf.number,
        full_name: fullName.fullName,
        phone: cel.number
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        'Accept': 'application/json'
      }
    }

    return fetch( `${Constants.manifest.extra.API_URL}/user`, options)
      .then((response) => response.json())
      .then((json) => {
        console.log('token recebido > ', json)
        if (json.token) {
          console.log('json.token', json.token)
          setToken(json.token);
          return { success: true, msg: { title: "Parabéns!", desc: "Sua conta foi criada com sucesso"} }
        }
        if (json.code === "ER_DUP_ENTRY") return { success: false, msg: { title: "Você já possui uma conta", desc: "Realize o login" }}
      })
      .catch((error) => {
        console.log(error);
        return { success: false, msg: { title: "Tente novamente mais tarde" , desc: `Erro:\n${error.message}` }}
      });
    }

  const onSubmit = async () => {
    const valid = validationFields();
    if (!valid.success) return Alert.alert(valid.msg.title, valid.msg.desc);
    setLoading(true);
    const result = await sendData();
    setLoading(false);
    if (valid.success && result.success) return Alert.alert(result.msg.title, result.msg.desc );
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
        style={RegisterStyle.flexViewOne}
      >
      { loading && <LoadingOverlay /> }
      <View style={RegisterStyle.flexViewOne}>
          <ImageBackground source={imageBack} style={RegisterStyle.background} >
            <Image source={agendalogo} />
              <View style={RegisterStyle.view}>
                <TextInput
                  style={ RegisterStyle.styleInput }
                  value={ fullName.text }
                  onChangeText={text => {
                    setFullName({ fullName: text })
                  }}
                  placeholder="Nome Completo"
                />
                
                <TextInput
                  style={RegisterStyle.styleInput}
                  value={ email.text }
                  onChangeText={text => {
                    setEmail({ email: text })
                  }}
                  placeholder="E-mail"
                />

                <TextInputMask
                  style={RegisterStyle.styleInput}
                  type={'cel-phone'}
                  options={{
                    maskType: 'BRL',
                    withDDD: true,
                    dddMask: '(99) '
                  }}
                  value={ cel.number }
                  onChangeText={text => {
                    setCelphone({ number: text })
                  }}
                  placeholder="Celular"
                />
                
                <TextInputMask
                  style={RegisterStyle.styleInput}
                  type={'cpf'}
                  value={ cpf.number }
                  onChangeText={text => {
                    setCpf({ number: text })
                  }}
                  placeholder="CPF"
                />
                <View>
                  <TextInput
                    secureTextEntry={!password.show}
                    style={RegisterStyle.styleInput}
                    placeholder="Senha"
                    value={ password.text }
                    onChangeText={text => {
                      setShowPassword({show: password.show, text })
                    }}
                  />
                  <TouchableOpacity style={RegisterStyle.password} onPress={() => showPassword()}>
                    { passwordShow(password) }
                  </TouchableOpacity>
                </View>
                <View >
                  <TextInput
                    secureTextEntry={!rePassword.show} 
                    style={RegisterStyle.styleInput}
                    placeholder="Confirme sua senha"
                    value={ rePassword.text }
                    onChangeText={text => {
                      setReShowPassword({show: rePassword.show, text })
                    }}
                  />
                  <TouchableOpacity style={RegisterStyle.password} onPress={() => showRePassword()}>
                      { passwordShow(rePassword) }
                    </TouchableOpacity>
                </View>
              </View>
              <View style={RegisterStyle.signimStyleRow}>
                <LinearGradient
                  colors={RegisterStyle.gradientRegister}
                  style={[RegisterStyle.styleGradient]}
                >
                  <TouchableOpacity onPress={() => onSubmit()}>
                    <Text style={{...RegisterStyle.styleInput, ...RegisterStyle.register}}>
                      CRIAR CONTA
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

export default Signup;