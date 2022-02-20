import React from 'react';
import { View, ActivityIndicator} from 'react-native';
import { StyleOverlay } from './style';

const LoadingOverlay = (props) => {

    return (
        <View style={StyleOverlay.common}>
            <ActivityIndicator size="large" color="#ff9900" />
        </View>
    );
}

export default LoadingOverlay;