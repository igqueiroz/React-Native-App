import React, { useContext } from 'react';
import { ConfigProvider } from './store/ConfigProvider';
import FirstPageLogic from './pages/FirstPageLogic';
import { navigate } from '@storybook/addon-links/dist/preview';

const Root = ( { navigation } ) => {
  return (
    <ConfigProvider>
      <FirstPageLogic navigation={navigation} />
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