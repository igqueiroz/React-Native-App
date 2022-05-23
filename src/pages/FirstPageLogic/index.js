import React, { useContext, memo } from 'react';
import { Alert } from 'react-native';
import Welcome from '../Welcome';
import Login from '../Login';
import LoadingOverlay from '../../components/LoadingOverlay';
import { ConfigContext } from '../../store/ConfigProvider';


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
    <ChooseFirstPage navigation={ props.navigation } userFirstTime={userFirstTime} />
  ) 
}

export default memo(FirstPageLogic);