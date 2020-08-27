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
  gradientFacebook: ['#4c669f', '#3b5998', '#192f6a'],
  styleGradient: { 
    borderRadius: 5,
    marginHorizontal: 15,
    borderRadius: 10,
  },
  styleButton: {
    fontSize: 15,
    color: '#ffffff',
    fontWeight: 'bold',
    paddingHorizontal: 22,
    paddingVertical: 15
  },
  styleButtonFb: {
    paddingHorizontal: 85
  },
  view: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 45
  },
  loginStyleRow: {
    flexDirection: 'row',
    marginTop: 30
  }
}

module.exports = LoginStyle