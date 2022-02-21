import React, { useContext, memo } from 'react';
import { View, Text, ActivityIndicator, Alert } from 'react-native';
import Welcome from '../Welcome';
import Login from '../Login';
import LoadingOverlay from '../../components/LoadingOverlay';
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
  if (props.userFirstTime === true || props.userFirstTime === null) {
    return <Welcome carouselItems={ carouselItems } navigation={ props.navigation } />
  } else {
    return <Login navigation={ props.navigation } />
  }
}

const FirstPageLogic = ( props ) => {
  const { netInfo, userFirstTime, loading } = useContext(ConfigContext);
  // Exemplo para recuperação de detalhes da network
  if (netInfo) console.log('Tipo do Celular', netInfo.details.carrier);
  if (netInfo && !netInfo.isConnected) Alert.alert('Sem internet', 'Favor verifique sua conexão e entre novamente.' );
  if (loading) return <LoadingOverlay/>
  return (
    <AuthProvider>
      <ChooseFirstPage navigation={ props.navigation } userFirstTime={userFirstTime} />
    </AuthProvider>
  ) 
}

export default memo(FirstPageLogic);