import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Stories from './storybook';
import Debug from './src/pages/Debug';
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

const navigator = createStackNavigator({
  Debug: { screen: Debug },
  Stories: { screen: Stories }
})
const AppContainer = createAppContainer(navigator)

const App = () => {
  return (
    <>
      <AppContainer />
    </>
  )
}

export default App;
