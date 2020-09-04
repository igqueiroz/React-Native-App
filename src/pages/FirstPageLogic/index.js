import React, { useContext } from 'react';
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

const verifyUserFirstTime = (props) => {
  const config = useContext(ConfigContext);
  // Verifica se é a primeira vez que usa o App depois de atualizar
  // WIP
  if (config.state.userFirstTime === true) {
    return <Welcome carouselItems={ carouselItems } navigation={ props.navigation } />
  } else {
    return <Login navigation={ props.navigation }/>
  }
}

const FirstPageLogic = ( { navigation} ) => {
    return <verifyUserFirstTime navigation={navigation} />
    
}

FirstPageLogic.navigationOptions = () => {
    const opt = {
      headerShown: false,
    }
    return opt;
}
export default FirstPageLogic;