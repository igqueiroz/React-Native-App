import Button from '../../components/Button';
import React from 'react';
import { Text, View, Image, Platform } from 'react-native';
import styles from './style'

const env = process.env;
const envMode = env.NODE_ENV;
const devMode = (envMode === "development") ? true: false
const production = <Text>Production</Text>

const Debug = ( { navigation } ) => {
    return (
        <View style={ styles.container }>
            <View style={ styles.wrapper }>
                <Image source={ require("../../assets/images/agendapets_logo.png") } style={ styles.logo } />
                <Button goScreen="Stories" navigation={ navigation }><Text style={ styles.text }>Storybook</Text></Button>
                <Button goScreen="Demo" navigation={ navigation }><Text style={ styles.text }>Demo</Text></Button>
            </View>
        </View>
    )
}

Debug.navigationOptions = () => {
    const opt = {
        title: 'Debug Mode',
    }

    if (Platform.OS === "android") {
        opt.headerShown = false
    }
    return opt;
}

export default Debug;