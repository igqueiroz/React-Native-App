import React, { memo, useContext} from 'react';
import { Image, Text, View, ImageBackground, TouchableOpacity, TextInput, Alert  } from 'react-native';
import LoginStyle from './style';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { AuthContext } from '../../store/AuthProvider';
import { TextInputMask } from 'react-native-masked-text';

const imageBackground = require('../../../src/assets/images/login.png');

const Login = (props) => {
  const [fullName, setFullName] = useState({});
  const [cpf, setCpf] = useState({});
  const [cel, setCelphone] = useState({});
  const [email, setEmail] = useState({});
  const [password, setShowPassword] = useState({show: false, text: null})
  const [rePassword, setReShowPassword] = useState({show: false, text: null})
  
  const showPassword = () => {
    if (password.show) setShowPassword({show: false, text: password.text})
    else setShowPassword({show: true, text: password.text})
  }

  const showRePassword = () => {
    if (rePassword.show) setReShowPassword({show: false, text: rePassword.text})
    else setReShowPassword({show: true, text: rePassword.text})
  }

  const onSubmit = () => {
    if (password.text !== rePassword.text) return Alert.alert('Opps..','As senhas devem ser idênticas.');
    if (password.text.trim().length < 8) return Alert.alert('Opps..', 'A senha precisa no mínimo 8 caracteres');
    if (password.text.trim().length < 8) return Alert.alert('Opps..', 'A senha precisa no mínimo 8 caracteres');
    return Alert.alert('Uhuu','Conta Criada com sucesso');
  }
  const passwordShow = (type) => {
    if (type.show) return <Image source={require('../../../src/assets/images/eye.png')} />
    else return <Image source={require('../../../src/assets/images/eye-closed.png')} />
  }
  return (
    <ImageBackground source={imageBackground} style={LoginStyle.background} >
      <Image source={require('../../../src/assets/images/agendapets_logo.png')} />
      <View style={LoginStyle.view}>
        <TextInput
          style={ LoginStyle.styleInput }
          value={ fullName.text }
          onChangeText={text => {
            setFullName({ fullName: text })
          }}
          placeholder="Nome Completo"
        />
        
        <TextInput
          style={LoginStyle.styleInput}
          value={ email.text }
          onChangeText={text => {
            setEmail({ email: text })
          }}
          placeholder="E-mail"
        />

        <TextInputMask
          style={LoginStyle.styleInput}
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
          style={LoginStyle.styleInput}
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
            style={LoginStyle.styleInput}
            placeholder="Senha"
            value={ password.text }
            onChangeText={text => {
              setShowPassword({show: password.show, text })
            }}
          />
          <TouchableOpacity style={LoginStyle.password} onPress={() => showPassword()}>
            { passwordShow(password) }
          </TouchableOpacity>
        </View>
        <View >
          <TextInput
            secureTextEntry={!rePassword.show} 
            style={LoginStyle.styleInput}
            placeholder="Confirme sua senha"
            value={ rePassword.text }
            onChangeText={text => {
              setReShowPassword({show: rePassword.show, text })
            }}
          />
          <TouchableOpacity style={LoginStyle.password} onPress={() => showRePassword()}>
              { passwordShow(rePassword) }
            </TouchableOpacity>
        </View>
      </View>
      <View style={LoginStyle.loginStyleRow}>
        <LinearGradient
          colors={LoginStyle.gradientRegister}
          style={[LoginStyle.styleGradient]}
        >
          <TouchableOpacity onPress={() => onSubmit()}>
            <Text style={{...LoginStyle.styleInput, ...LoginStyle.register}}>
              CRIAR CONTA
            </Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </ImageBackground>
  )
}

export default memo(Login);