import { StyleSheet } from 'react-native';

const StyleButton = StyleSheet.create({
  common: {
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
  }
})

const gradientFacebook = ['#4c669f', '#3b5998', '#192f6a']
const gradientAgenda = ['#FCB314', '#ED1C24']

const touchWrapper = {
  borderRadius: 5,
  borderStyle: 'solid',
}

module.exports = { StyleButton, gradientFacebook, gradientAgenda, touchWrapper }