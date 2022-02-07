/* eslint-disable quotes */
import { StatusBar } from "expo-status-bar";
import React from "react";
import Stories from "./storybook";
import Debug from "./src/pages/Debug";
import Welcome from "./src/pages/Welcome";
import Login from "./src/pages/Login";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Routes from "./src/Root";
import Constants from 'expo-constants';

const devMode = Constants.manifest.extra.APP_ENV === 'DEV' ? true : false;
const debug = { Debug: { screen: Debug } };
const routes = {
  Routes: { screen: Routes },
  Stories: { screen: Stories },
  Welcome: { screen: Welcome },
  Login: { screen: Login },
};
// Verifica se está em modo dev para ir ao modo Debug
const navigator = devMode
  ? createStackNavigator({ ...debug, ...routes })
  : createStackNavigator(routes);
const AppContainer = createAppContainer(navigator);
const App = () => {
  return (
    <>
      <StatusBar style="light" animated={true} backgroundColor="#333333" />
      <AppContainer />
    </>
  );
};

export default App;
