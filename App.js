import { StatusBar } from 'expo-status-bar';
import React from 'react';
// import { Text, View } from 'react-native';
import Stories from './storybook';
import Debug from './src/pages/Debug';
import Welcome from './src/pages/Welcome';
import Login from './src/pages/Login';
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Routes from './src/Root';

const navigator = createStackNavigator({
  Debug: { screen: Debug },
  Routes: { screen: Routes },
  Stories: { screen: Stories },
  Welcome: { screen: Welcome },
  Login: { screen: Login }
})
const AppContainer = createAppContainer(navigator);

const App = () => {
  const env = process.env;
  const envMode = env.NODE_ENV;
  const devMode = (envMode === "development") ? true: false;
  // const Production = () => { return (<View style={{justifyContent: "center", alignItems: "center", flex: 1}}><Text>Production</Text></View>) };
  const FirstPage = (devMode) ? AppContainer : Routes;

  return (
    <>
      <StatusBar style="light" animated={true} backgroundColor="#333333" />
      <FirstPage />
    </>
  )
}

export default App;
