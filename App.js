import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Stories from './storybook';
import Button from './src/components/Button';
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

const navigator = createStackNavigator({
  Stories: { screen: Stories}
})

const AppContainer = createAppContainer(navigator)

const App = () => {
  const env = process.env;
  const envMode = env.NODE_ENV;
  const devMode = (envMode === "development") ? true: false
  const onPress = () => {
    console.log(envMode)
  }
  const debug = (
    <View style={ styles.container }>
      <View style={ styles.wrapper }>
        <Image source={require("./src/assets/images/agendapets_logo.png")} style={styles.logo} />
        <Button onPress={ onPress } ><Text style={ styles.text }>Storybook</Text></Button>
        <Button onPress={ onPress } ><Text style={ styles.text }>Demo</Text></Button>
      </View>
    </View>
  )
  
  const production = <Text>Production</Text>
  rerturn (
    <>
      <navigator />
    </>
  )
  
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#666',
    alignItems: 'center',
    justifyContent: 'center'
  },
  wrapper: {
    width: 300,
    height: 270,
    justifyContent: 'space-around',
  },  
  text: {
    fontSize: 18,
    color: '#fff',
  },
  logo: {
    alignItems: 'center',
    justifyContent: 'center',
  }
});
