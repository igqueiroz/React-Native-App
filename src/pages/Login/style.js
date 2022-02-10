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
  gradientFacebook: ['#ea4235', '#ea4235'],
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
  view: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 45
  },
  loginStyleRow: {
    flexDirection: 'row',
    marginTop: 30
  },
  googleLogin: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 0,
    paddingHorizontal: 60
  },
  googleImage: {
    marginTop: 9,
    marginLeft: 10,
  },
  styleButtonGoogle: {
    paddingHorizontal: 12
  }
}


module.exports = LoginStyle