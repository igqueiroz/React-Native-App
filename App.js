/* eslint-disable quotes */
import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './src/store/AuthProvider';
import Navigator from './src/Navigator'

const App = () => {
  return (
    <AuthProvider>
      <NavigationContainer >
        <StatusBar style="light" animated={true} backgroundColor="#333333" />
          <Navigator />
      </NavigationContainer>
    </AuthProvider>
  );
};

export default App;
