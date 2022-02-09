import React, { useContext } from 'react';
import { ConfigProvider } from './store/ConfigProvider';
import { ThemeProvider } from './store/ThemeProvider';
import FirstPageLogic from './pages/FirstPageLogic';

const Root = ( { navigation } ) => {
  return (
    <ThemeProvider>
      <ConfigProvider>
        <FirstPageLogic navigation={ navigation } />
      </ConfigProvider>
    </ThemeProvider>
  )
}

export default Root;