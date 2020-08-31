import React from 'react';
import { View, Text } from 'react-native';
import Welcome from './pages/Welcome';
import { Login } from "./pages/Login";
import { ConfigProvider} from './store/ConfigProvider';

const carouselItems = [
    {
      illustration: require('./assets/images/slider1.png'),
    },
    {
      illustration: require('./assets/images/slider2.png'),
    },
    {
      illustration: require('./assets/images/slider3.png'),
      title: '.'
    }
]

const Profile = () => {
  return (<View style={{justifyContent: "center", alignItems: "center", flex: 1}}><Text>DASHBOARD</Text></View>)
}

const Root = ( { navigation} ) => {
    // WIP - Autenticação
    //  return user ? <Profile /> : <Login />
  return (
    <ConfigProvider>
      
        <Welcome carouselItems={ carouselItems } navigation={ navigation } />
      
    </ConfigProvider>
  )
}

Root.navigationOptions = () => {
    const opt = {
      headerShown: false,
    }
  
    return opt;
}
export default Root;