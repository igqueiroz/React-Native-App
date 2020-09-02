import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import Welcome from '../Welcome';
import { Login } from '../Login';
import { ConfigContext } from '../../store/ConfigProvider';
import { ThemeContext } from '../../store/ThemeProvider';
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

const FirstPageLogic = ( { navigation} ) => {
    const config = useContext(ConfigContext);
    const theme = useContext(ThemeContext);
    console.log('XXXX ', theme )
    // Verifica se é a primeira vez que usa o App depois de atualizar
    if (config.userFirstTime === true) {
      return <Welcome carouselItems={ carouselItems } navigation={ navigation } />
    } else {
      return (
        // WIP ==> Fazer a lógica dentro do componente de Login
        <AuthProvider>
          <Login navigation={ navigation }/>
        </AuthProvider>
      )
    }
}

FirstPageLogic.navigationOptions = () => {
    const opt = {
      headerShown: false,
    }
  
    return opt;
}
export default FirstPageLogic;