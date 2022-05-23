import React, {useContext} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { AuthContext } from '../../store/AuthProvider'

const Home = (props) => {
  const { user, logout } = useContext(AuthContext);
  const logoutFunc = async () => {
    let result = await logout();
    console.log('result logout', result)
  }
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Estou logado</Text>
      <TouchableOpacity onPress={ logoutFunc } >
        <Text>Logout( { user.id } )</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Home