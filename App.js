import { StatusBar } from 'expo-status-bar';
import React from 'react';
// import { Text, View } from 'react-native';
import Stories from './storybook';
import Debug from './src/pages/Debug';
import Welcome from './src/pages/Welcome';
import FirstPageLogic from './src/pages/FirstPageLogic';
import Login from './src/pages/Login';
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Routes from './src/Root';

const env = process.env;
const envMode = env.NODE_ENV;
const devMode = (envMode === "development") ? true: false;
const debug = { Debug: { screen: Debug } };
const routes = {
  Routes: { screen: Routes },
  Stories: { screen: Stories },
  Welcome: { screen: Welcome },
  FirstPageLogic: { screen: FirstPageLogic},
  Login: { screen: Login }
}
const navigator = (devMode) ? createStackNavigator({...debug, ...routes}) : createStackNavigator(routes)
// Verifica se está em modo dev para ir ao modo Debug
const AppContainer = createAppContainer(navigator)
const App = () => {
  return (
    <>
      <StatusBar style="light" animated={true} backgroundColor="#333333" />
      <AppContainer />
    </>
  )
}

export default App;
