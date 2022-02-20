import { StyleSheet } from 'react-native';

const StyleOverlay = StyleSheet.create({
  common: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.65)',
    zIndex: 1
  }
})

module.exports = { StyleOverlay }