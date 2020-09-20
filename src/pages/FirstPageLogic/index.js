import React, { useContext, useRef, memo, useEffect, useState, useCallback } from 'react';
import { View, Text } from 'react-native';
import Welcome from '../Welcome';
import Login from '../Login';
import { ConfigContext } from '../../store/ConfigProvider';
import { AuthProvider } from '../../store/AuthProvider';

const carouselItems = [
    {
      illustration: require('../../assets/images/slider1.png'),
    },
    {
      illustration: require('../../assets/images/slider2.png'),
    },
    {
      illustration: require('../../assets/images/slider3.png'),
      title: '.'
    }
]

const Profile = () => {
  return (<View style={{justifyContent: "center", alignItems: "center", flex: 1}}><Text>DASHBOARD</Text></View>)
}

const ChooseFirstPage = (props) => {
  if (props.userFirstTime == "true") {
    return <Welcome carouselItems={ carouselItems } navigation={ props.navigation } />
  } else {
    return <Login navigation={ props.navigation } />
  }
}

const FirstPageLogic = ( props ) => {
  const { netInfo, userFirstTime } = useContext(ConfigContext);
  // Exemplo para recuperação de detalhes da network
  if (netInfo) console.log('Tipo do Celular', netInfo.details.carrier);
  return (
    <AuthProvider>
      <ChooseFirstPage navigation={ props.navigation } userFirstTime={userFirstTime} />
    </AuthProvider>
  ) 
}

FirstPageLogic.navigationOptions = () => {
    const opt = {
      headerShown: false,
    }
    return opt;
}
export default memo(FirstPageLogic);