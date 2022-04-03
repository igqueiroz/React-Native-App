/* eslint-disable quotes */
import { StatusBar } from "expo-status-bar";
import React, { useContext } from "react";
import { View } from "react-native";
import Stories from "./storybook";
import Debug from "./src/pages/Debug";
import Welcome from "./src/pages/Welcome";
import Login from "./src/pages/Login";
import Signup from "./src/pages/Signup";
import Signin from "./src/pages/Signin";
import Home from "./src/pages/Home";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useUser } from './src/auth/useUser';
import Routes from "./src/Root";
import Constants from 'expo-constants';
import { AuthProvider } from './src/store/AuthProvider';

const navigator = () => {
  console.log('useUser 3', useUser() );

  const devMode = Constants.manifest.extra.APP_ENV !== 'PRD' ? true : false;
  const Stack = createNativeStackNavigator();
  const isDebug = (devMode) ? <Stack.Screen name="Debug" component={ Debug } /> : null

  let routes = (
    <View style={{ flex: 1, backgroundColor: 'black' }}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        { isDebug }
        <Stack.Screen name="Stories" component={ Stories } />
        <Stack.Screen name="Routes" component={ Routes } />
        {false ? (
          <>
            <Stack.Screen name="Welcome" component={ Welcome } />
            <Stack.Screen name="Home" component={ Home } />
          </>
        ) : (
          <>
            <Stack.Screen name="Welcome" component={ Welcome } />
            <Stack.Screen name="Login" component={ Login } />
            <Stack.Screen name="Signup" component={ Signup } />
            <Stack.Screen name="Signin" component={ Signin } /> 
          </>
        )}
      </Stack.Navigator>
    </View>
  )
  return routes
}

const App = () => {
  return (
    <AuthProvider>
      <NavigationContainer >
        <StatusBar style="light" animated={true} backgroundColor="#333333" />
          { navigator() }
      </NavigationContainer>
    </AuthProvider>
  );
};

export default App;
