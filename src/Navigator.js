/* eslint-disable quotes */
import React, { useContext, useEffect } from "react";
import { View } from "react-native";
import Stories from "../storybook";
import Debug from "../src/pages/Debug";
import Welcome from "../src/pages/Welcome";
import Login from "../src/pages/Login";
import Signup from "../src/pages/Signup";
import Signin from "../src/pages/Signin";
import Home from "../src/pages/Home";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Routes from "./Root";
import Constants from 'expo-constants';
import { AuthContext } from '../src/store/AuthProvider';
import { useIsFocused } from '@react-navigation/native';

const Navigator = ( { navigation } ) => {
    const { auth } = useContext(AuthContext);
    const isFocused = useIsFocused();
    const devMode = Constants.manifest.extra.APP_ENV !== 'PRD' ? true : false;
    const Stack = createNativeStackNavigator();
    const isDebug = (devMode) ? <Stack.Screen name="Debug" component={ Debug } /> : null;
    
    return (
    <View style={{ flex: 1, backgroundColor: 'black' }}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            { isDebug }
            <Stack.Screen name="Stories" component={ Stories } />
            <Stack.Screen name="Routes" component={ Routes }  />
            { auth && auth.id ? (
            <>
                <Stack.Screen name="Welcome" component={ Welcome } />
                <Stack.Screen name="Home" component={ Home } />
            </>
            ) : (
            <>
                <Stack.Screen name="Welcome" component={ Welcome } />
                <Stack.Screen name="Login" component={ Login } rerender={isFocused} />
                <Stack.Screen name="Signup" component={ Signup } />
                <Stack.Screen name="Signin" component={ Signin } /> 
            </>
            )}
        </Stack.Navigator>
    </View>
  )
}

export default Navigator;