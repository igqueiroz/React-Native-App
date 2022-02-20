import React, { memo, useContext} from 'react';
import { Image, Text, View, ImageBackground, TouchableOpacity, TextInput, Alert  } from 'react-native';
import LoginStyle from './style';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { AuthContext } from '../../store/AuthProvider';
import { TextInputMask } from 'react-native-masked-text';
import LoadingOverlay from '../../components/LoadingOverlay';

const imageBackground = require('../../../src/assets/images/login.png');

const Register = (props) => {
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
    if (type.show) return <Image source={require('../../../src/assets/images/eye.png')} />
    else return <Image source={require('../../../src/assets/images/eye-closed.png')} />
  }

  return (
    <>
      { loading && <LoadingOverlay /> }
      <View style={{flex: 1}} >
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
      </View>
    </>
  )
}

export default Register;