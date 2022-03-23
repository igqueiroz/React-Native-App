import React, {useContext} from 'react';
import { View, Text } from 'react-native';
import { AuthContext } from '../../store/AuthProvider';

const Home = (props) => {
    const { teste } = useContext(AuthContext);

    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Estou logado</Text>
        </View>
    )
}

export default Home