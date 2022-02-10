import { Dimensions } from 'react-native';
const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const LoginStyle = {
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: 'center',
  },
  gradientAgenda: ['#FCB314', '#ED1C24'],
  gradientRegister: ['#FF4C00', '#FF4C00', '#FF4C00'],
  styleGradient: { 
    borderRadius: 5,
    marginHorizontal: 15,
    borderRadius: 10,
  },
  styleInput: {
    fontSize: 15,
    color: '#FF4C00',
    fontWeight: 'bold',
    paddingHorizontal: 15,
    paddingVertical: 5,
    marginTop: 5,
    padding: 10,
    backgroundColor: "#CACACA",
    borderRadius: 5,
    width: 270

  },
  view: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginTop: 45
  },
  loginStyleRow: {
    flexDirection: 'row',
    marginTop: 30
  },
  register: {
    paddingHorizontal: 85,
    backgroundColor: 'transparent',
    height: 36,
    color: 'white',
  },
  password: {
    position: 'absolute',
    top: 10,
    right: 5,
    zIndex: 99
  }
}

module.exports = LoginStyle