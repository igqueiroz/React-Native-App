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
    borderRadius: 10
  },
  styleButton: {
    fontSize: 15,
    color: '#ffffff',
    fontWeight: 'bold',
    paddingHorizontal: 10
  },
  view: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 45
  },
  viewMargin: {
    marginRight: 12
  },
  loginStyleRow: {
    flexDirection: 'row',
    marginTop: 30
  },
  googleLogin: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 0,
    paddingHorizontal: 50
  },
  googleImage: {
    marginTop: 9,
    marginLeft: 20
  },
  styleButtonGoogle: {
    paddingHorizontal: 7,
    paddingVertical: 15
  }
}


module.exports = LoginStyle