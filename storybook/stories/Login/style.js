import { Dimensions } from 'react-native';
const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const CarouselStyledButtons = {
    gradientAgenda: ['#FCB314', '#ED1C24'],
    styleGradient: { 
      padding: 15, 
      alignItems: 'center', 
      borderRadius: 5,
      zIndex: 3,
      borderStyle: 'solid',
      borderWidth: 0,
      marginHorizontal: 30,
      borderRadius: 10,
      marginBottom: -50,
    },
    styleTopAgenda: {
      top: -(screenHeight / 1.5 - 140)
    },
    styleButton: {
      backgroundColor: 'transparent',
      fontSize: 15,
      color: '#fff',
    }
  }

  module.exports = CarouselStyledButtons